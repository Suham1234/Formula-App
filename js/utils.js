export function normalizeString(str) {
    return str
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/[._−]/g, '')
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/−/g, '-')
        .replace(/²/g, '2')
        .replace(/³/g, '3')
        .replace(/⁴/g, '4')
        .replace(/ⁿ/g, 'n')
        .replace(/ᵐ/g, 'm')
        .replace(/ⁱ/g, 'i')
        .replace(/⁺/g, '+')
        .replace(/⁻/g, '-')
        .replace(/⁰/g, '0')
        .replace(/¹/g, '1')
        .replace(/α/g, 'a')
        .replace(/β/g, 'b')
        .replace(/θ/g, 'theta')
        .replace(/φ/g, 'phi')
        .replace(/ω/g, 'omega')
        .replace(/λ/g, 'lambda')
        .replace(/μ/g, 'mu')
        .replace(/σ/g, 'sigma')
        .replace(/Δ/g, 'delta')
        .replace(/Σ/g, 'sum')
        .replace(/√/g, 'sqrt')
        .replace(/∞/g, 'infinity')
        .replace(/≠/g, '!=')
        .replace(/≤/g, '<=')
        .replace(/≥/g, '>=');
}

export function calculateSimilarity(str1, str2) {
    const s1 = normalizeString(str1);
    const s2 = normalizeString(str2);
    
    if (s1 === s2) return 1;
    if (s1.includes(s2) || s2.includes(s1)) return 0.9;
    
    const words1 = s1.split(/[\+\-\*\/\=\(\)\,]/).filter(w => w.length > 0);
    const words2 = s2.split(/[\+\-\*\/\=\(\)\,]/).filter(w => w.length > 0);
    
    const intersection = words1.filter(w => words2.includes(w));
    const union = [...new Set([...words1, ...words2])];
    
    return intersection.length / union.length;
}

export function checkAnswer(userAnswer, correctAnswer) {
    const normalizedUser = normalizeString(userAnswer);
    const normalizedCorrect = normalizeString(correctAnswer);
    
    if (normalizedUser === normalizedCorrect) {
        return { status: 'correct', score: 100 };
    }
    
    const similarity = calculateSimilarity(userAnswer, correctAnswer);
    
    if (similarity >= 0.8) {
        return { status: 'correct', score: Math.round(similarity * 100) };
    } else if (similarity >= 0.5) {
        return { status: 'partial', score: Math.round(similarity * 100) };
    } else {
        return { status: 'incorrect', score: 0 };
    }
}

export function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Storage error:', e);
        return false;
    }
}

export function loadFromStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Storage error:', e);
        return null;
    }
}

export function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
