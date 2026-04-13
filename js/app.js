import { checkAnswer, saveToStorage, loadFromStorage, shuffleArray, debounce } from './utils.js';
import mathFormulas from '../data/math_formulas.js';
import physicsFormulas from '../data/physics_formulas.js';
import chemistryFormulas from '../data/chemistry_formulas.js';
import chemistryReactions from '../data/chemistry_reactions.js';


class FormulaFlashcardApp {
    constructor() {
        this.currentSubject = 'math';
        this.currentTopic = 'all';
        this.currentMode = 'flip';
        this.formulas = {
            math: mathFormulas,
            physics: physicsFormulas,
            chemistry: chemistryFormulas,
            reactions: chemistryReactions
        };
        this.progress = loadFromStorage('formulaProgress') || {};
        this.shuffledCards = [];
        this.currentIndex = 0;
        this.isFlipped = false;
        this.typeModeState = {
            currentCard: null,
            userAnswer: ''
        };
        this.katexCache = new Map();
        this.cachedCards = new Map();

        this.waitForKaTeX().then(() => {
            this.init();
        });
    }

    waitForKaTeX() {
        return new Promise((resolve) => {
            const check = () => {
                if (window.katex) {
                    resolve();
                } else {
                    setTimeout(check, 50);
                }
            };
            check();
        });
    }

    init() {
        this.bindEvents();
        this.loadCards();
        this.render();
    }

    bindEvents() {
        document.querySelectorAll('.subject-tab').forEach(tab => {
            tab.addEventListener('click', () => this.switchSubject(tab.dataset.subject));
        });

        document.getElementById('topicSelect').addEventListener('change', (e) => {
            this.currentTopic = e.target.value;
            this.loadCards();
            this.preCacheCards();
            this.render();
        });

        document.getElementById('searchInput').addEventListener('input',
            debounce((e) => this.handleSearch(e.target.value), 300)
        );

        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchMode(btn.dataset.mode));
        });

        document.getElementById('mainFlashcard')?.addEventListener('click', (e) => {
            if (e.target.closest('.card-actions')) return;
            this.flipCard();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevCard();
            } else if (e.key === 'ArrowRight') {
                this.nextCard();
            }
        });
    }

    switchSubject(subject) {
        this.currentSubject = subject;
        this.currentTopic = 'all';
        document.getElementById('topicSelect').value = 'all';

        document.querySelectorAll('.subject-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.subject === subject);
        });

        const accentColors = {
            math: '#4a90d9',
            physics: '#9b59b6',
            chemistry: '#27ae60',
            reactions: '#e67e22'
        };
        document.documentElement.style.setProperty('--accent', accentColors[subject]);

        this.katexCache.clear();
        this.loadCards();
        this.preCacheCards();
        this.render();
    }

    switchMode(mode) {
        this.currentMode = mode;
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });
        this.render();
    }

    handleSearch(query) {
        if (query.trim()) {
            this.currentTopic = 'search';
            this.loadCards(query);
            this.preCacheCards();
        } else {
            this.currentTopic = 'all';
            this.loadCards();
            this.preCacheCards();
        }
        this.render();
    }

    loadCards(searchQuery = '') {
        const subjectData = this.formulas[this.currentSubject];
        let allCards = [];

        if (searchQuery) {
            const normalizedQuery = searchQuery.toLowerCase().trim();
            for (const topic in subjectData) {
                subjectData[topic].forEach(card => {
                    if (card.front.toLowerCase().includes(normalizedQuery) ||
                        card.back.toLowerCase().includes(normalizedQuery) ||
                        topic.toLowerCase().includes(normalizedQuery)) {
                        allCards.push({ ...card, topic: topic });
                    }
                });
            }
        } else if (this.currentTopic === 'all') {
            for (const topic in subjectData) {
                subjectData[topic].forEach(card => {
                    allCards.push({ ...card, topic: topic });
                });
            }
        } else if (subjectData[this.currentTopic]) {
            subjectData[this.currentTopic].forEach(card => {
                allCards.push({ ...card, topic: this.currentTopic });
            });
        }

        this.shuffledCards = shuffleArray(allCards);
        this.currentIndex = 0;
        this.isFlipped = false;
    }

    preCacheCards() {
        requestIdleCallback(() => {
            this.shuffledCards.forEach(card => {
                const frontKey = card.front + '_front';
                const backKey = card.back + '_back';

                if (!this.katexCache.has(frontKey)) {
                    const frontEl = document.createElement('div');
                    this.renderKaTeX(frontEl, card.front + ' = ?');
                    this.katexCache.set(frontKey, frontEl.innerHTML);
                }

                if (!this.katexCache.has(backKey)) {
                    const backEl = document.createElement('div');
                    this.renderKaTeX(backEl, card.back);
                    this.katexCache.set(backKey, backEl.innerHTML);
                }
            });
        }, { timeout: 2000 });
    }

    getCardStatus(cardId) {
        return this.progress[cardId] || 'none';
    }

    markCard(status) {
        if (this.shuffledCards.length === 0) return;

        const card = this.shuffledCards[this.currentIndex];
        this.progress[card.front] = status;
        saveToStorage('formulaProgress', this.progress);
        this.updateCardButtons(card.front);
        this.updateProgressDots();
    }

    flipCard() {
        if (this.currentMode !== 'flip' || this.shuffledCards.length === 0) return;

        this.isFlipped = !this.isFlipped;
        const flashcard = document.getElementById('mainFlashcard');
        if (flashcard) {
            if (this.isFlipped) {
                flashcard.classList.add('flipped');
            } else {
                flashcard.classList.remove('flipped');
            }
        }
    }

    prevCard() {
        if (this.shuffledCards.length === 0) return;

        this.currentIndex = (this.currentIndex - 1 + this.shuffledCards.length) % this.shuffledCards.length;
        this.isFlipped = false;
        this.updateCardDisplay();
    }

    nextCard() {
        if (this.shuffledCards.length === 0) return;

        this.currentIndex = (this.currentIndex + 1) % this.shuffledCards.length;
        if (this.currentIndex === 0) {
            this.shuffledCards = shuffleArray([...this.shuffledCards]);
        }
        this.isFlipped = false;
        this.updateCardDisplay();
    }

    shuffleCards() {
        if (this.shuffledCards.length === 0) return;

        this.shuffledCards = shuffleArray([...this.shuffledCards]);
        this.currentIndex = 0;
        this.isFlipped = false;
        this.updateCardDisplay();
    }

    goToCard(index) {
        if (index < 0 || index >= this.shuffledCards.length) return;

        this.currentIndex = index;
        this.isFlipped = false;
        this.updateCardDisplay();
    }

    renderKaTeX(element, text) {
        if (!element) return;

        const formulaText = this.preprocessFormula(text);

        try {
            katex.render(formulaText, element, {
                throwOnError: false,
                displayMode: true
            });
        } catch (e) {
            element.textContent = text;
        }
    }

    preprocessFormula(text) {
        if (!text) return text;

        const replacements = [
            [/×/g, ' \\times '],
            [/\//g, ' \\div '],
            [/\*/g, ' \\cdot '],
            [/≠/g, ' \\neq '],
            [/±/g, ' \\pm '],
            [/≤/g, ' \\leq '],
            [/≥/g, ' \\geq '],
            [/√/g, ' \\sqrt '],
            [/∞/g, ' \\infty '],
            [/→/g, ' \\rightarrow '],
            [/↔/g, ' \\leftrightarrow '],
            [/Δ/g, ' \\Delta '],
            [/Σ/g, ' \\Sigma '],
            [/Π/g, ' \\Pi '],
            [/α/g, ' \\alpha '],
            [/β/g, ' \\beta '],
            [/θ/g, ' \\theta '],
            [/φ/g, ' \\phi '],
            [/ω/g, ' \\omega '],
            [/λ/g, ' \\lambda '],
            [/μ/g, ' \\mu '],
            [/σ/g, ' \\sigma '],
            [/∈/g, ' \\in '],
            [/∪/g, ' \\cup '],
            [/∩/g, ' \\cap '],
            [/∫/g, ' \\int '],
            [/∑/g, ' \\sum '],
            [/∏/g, ' \\prod '],
            [/²/g, '^{2}'],
            [/³/g, '^{3}'],
            [/⁴/g, '^{4}'],
            [/ⁿ/g, '^{n}'],
            [/⁻/g, '^{-}'],
            [/⁺/g, '^{+}'],
            [/₀/g, '_{0}'],
            [/₁/g, '_{1}'],
            [/₂/g, '_{2}'],
            [/₃/g, '_{3}'],
            [/₄/g, '_{4}']
        ];

        let result = text;
        for (const [pattern, replacement] of replacements) {
            result = result.replace(pattern, replacement);
        }
        return result;
    }

    getCachedKaTeX(text) {
        const cacheKey = text;

        if (this.katexCache.has(cacheKey)) {
            return this.katexCache.get(cacheKey);
        }

        const tempEl = document.createElement('div');
        this.renderKaTeX(tempEl, text);
        const html = tempEl.innerHTML;
        this.katexCache.set(cacheKey, html);

        return html;
    }

    updateCardDisplay() {
        if (this.shuffledCards.length === 0) {
            this.showNoCards();
            return;
        }

        const card = this.shuffledCards[this.currentIndex];
        const flashcard = document.getElementById('mainFlashcard');

        if (flashcard) {
            flashcard.classList.remove('flipped');
            flashcard.style.display = 'block';
        }

        document.getElementById('cardTopic').textContent = card.topic;
        document.getElementById('cardTopicBack').textContent = card.topic;

        const frontKey = card.front + ' = ?';
        const frontHtml = this.getCachedKaTeX(frontKey);
        document.getElementById('formulaFront').innerHTML = frontHtml;

        const backHtml = this.getCachedKaTeX(card.back);
        document.getElementById('formulaBack').innerHTML = backHtml;

        document.getElementById('cardExplanation').textContent = card.explanation;

        this.updateCardButtons(card.front);
        this.updateProgressDots();
        this.renderProgress();
    }

    renderTopics() {
        const subjectData = this.formulas[this.currentSubject];
        const select = document.getElementById('topicSelect');
        select.innerHTML = '<option value="all">All Topics</option>';

        for (const topic in subjectData) {
            const option = document.createElement('option');
            option.value = topic;
            option.textContent = topic;
            select.appendChild(option);
        }

        if (this.currentTopic !== 'all' && this.currentTopic !== 'search') {
            select.value = this.currentTopic;
        }
    }

    updateProgressDots() {
        const dotsContainer = document.getElementById('progressDots');
        const total = this.shuffledCards.length;
        const displayDots = Math.min(total, 50);

        dotsContainer.innerHTML = '';

        for (let i = 0; i < displayDots; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';

            if (i === this.currentIndex) {
                dot.classList.add('active');
            }

            const card = this.shuffledCards[i];
            if (card) {
                const status = this.getCardStatus(card.front);
                if (status === 'learned' && i !== this.currentIndex) {
                    dot.classList.add('learned');
                } else if (status === 'practice' && i !== this.currentIndex) {
                    dot.classList.add('practice');
                }
            }

            dot.addEventListener('click', () => this.goToCard(i));
            dotsContainer.appendChild(dot);
        }

        const counter = document.getElementById('cardCounter');
        if (counter) {
            counter.textContent = `Card ${this.currentIndex + 1} of ${total}`;
        }
    }

    updateCardButtons(cardId) {
        const status = this.getCardStatus(cardId);
        const btnLearned = document.getElementById('btnLearned');
        const btnPractice = document.getElementById('btnPractice');

        if (btnLearned && btnPractice) {
            btnLearned.classList.toggle('active', status === 'learned');
            btnPractice.classList.toggle('active', status === 'practice');
        }
    }

    renderProgress() {
        const total = this.shuffledCards.length;
        const learned = this.shuffledCards.filter(c => this.getCardStatus(c.front) === 'learned').length;
        const practice = this.shuffledCards.filter(c => this.getCardStatus(c.front) === 'practice').length;
        const percentage = total > 0 ? Math.round((learned / total) * 100) : 0;

        document.getElementById('progressFill').style.width = `${percentage}%`;
        document.getElementById('progressText').textContent = `${percentage}% mastered`;
        document.getElementById('totalCount').textContent = total;
        document.getElementById('learnedCount').textContent = learned;
        document.getElementById('practiceCount').textContent = practice;
    }

    renderCard() {
        if (this.shuffledCards.length === 0) {
            this.showNoCards();
            return;
        }

        const card = this.shuffledCards[this.currentIndex];
        const flashcard = document.getElementById('mainFlashcard');

        if (flashcard) {
            flashcard.classList.remove('flipped');
            flashcard.style.display = 'block';
        }

        document.getElementById('cardTopic').textContent = card.topic;
        document.getElementById('cardTopicBack').textContent = card.topic;

        const frontHtml = this.getCachedKaTeX(card.front + ' = ?');
        document.getElementById('formulaFront').innerHTML = frontHtml;

        const backHtml = this.getCachedKaTeX(card.back);
        document.getElementById('formulaBack').innerHTML = backHtml;

        document.getElementById('cardExplanation').textContent = card.explanation;

        this.updateCardButtons(card.front);
        this.updateProgressDots();
        this.renderProgress();
    }

    showNoCards() {
        const container = document.getElementById('flashcardContainer');
        container.innerHTML = `
            <div class="no-cards">
                <h3>No formulas found</h3>
                <p>Try adjusting your search or selecting a different topic.</p>
            </div>
        `;
    }

    renderTypeMode() {
        if (this.shuffledCards.length === 0) {
            this.showNoCards();
            return;
        }

        const card = this.shuffledCards[this.currentIndex];
        const container = document.getElementById('flashcardContainer');

        container.innerHTML = `
            <div class="type-mode">
                <h3>Type the Formula</h3>
                <div class="type-question">${card.front}</div>
                <input type="text"
                    class="type-input"
                    id="typeInput"
                    placeholder="Type the formula..."
                    value="${this.typeModeState.userAnswer}"
                    oninput="app.updateTypeAnswer(this.value)">
                <p class="type-hint">Hint: Your answer will be checked with flexible matching (spaces, symbols, and formatting don't need to be exact)</p>
                <div id="typeResult"></div>
                <div class="type-actions">
                    <button class="type-btn primary" onclick="app.checkTypeAnswer()">Check Answer</button>
                    <button class="type-btn secondary" onclick="app.revealAnswer()">Reveal Answer</button>
                    <button class="type-btn secondary" onclick="app.prevCard()">← Prev</button>
                    <button class="type-btn secondary" onclick="app.nextCard()">Next →</button>
                </div>
                <div class="card-actions" style="margin-top: 20px;">
                    <button class="card-btn learned ${this.getCardStatus(card.front) === 'learned' ? 'active' : ''}"
                        onclick="app.markCard('learned'); app.nextCard();">
                        ✓ Learned
                    </button>
                    <button class="card-btn practice ${this.getCardStatus(card.front) === 'practice' ? 'active' : ''}"
                        onclick="app.markCard('practice'); app.nextCard();">
                        ↻ Practice
                    </button>
                </div>
            </div>
        `;

        document.getElementById('typeInput')?.focus();
        this.updateProgressDots();
        this.renderProgress();
    }

    updateTypeAnswer(value) {
        this.typeModeState.userAnswer = value;
    }

    checkTypeAnswer() {
        const resultDiv = document.getElementById('typeResult');
        if (!resultDiv || this.shuffledCards.length === 0) return;

        const card = this.shuffledCards[this.currentIndex];
        const result = checkAnswer(this.typeModeState.userAnswer, card.back);

        if (result.status === 'correct') {
            resultDiv.innerHTML = `
                <div class="type-result correct">
                    ✓ Correct! ${result.score === 100 ? 'Perfect match!' : `Match score: ${result.score}%`}
                </div>
            `;
        } else if (result.status === 'partial') {
            resultDiv.innerHTML = `
                <div class="type-result partial">
                    ⚠ Partial match (${result.score}%). Keep trying or reveal the answer.
                </div>
            `;
        } else {
            resultDiv.innerHTML = `
                <div class="type-result incorrect">
                    ✗ Not quite. Try again or reveal the answer.
                </div>
            `;
        }
    }

    revealAnswer() {
        if (this.shuffledCards.length === 0) return;

        const card = this.shuffledCards[this.currentIndex];
        const resultDiv = document.getElementById('typeResult');
        if (resultDiv) {
            resultDiv.innerHTML = `
                <div class="type-result" style="background: var(--bg-primary); color: var(--text-primary);">
                    <strong>Correct answer:</strong> ${card.back}
                    <br><br>
                    <em>${card.explanation}</em>
                </div>
            `;
        }
    }

    render() {
        this.renderTopics();

        if (this.currentMode === 'flip') {
            this.renderCard();
        } else {
            this.renderTypeMode();
        }
    }
}

const app = new FormulaFlashcardApp();
window.app = app;
