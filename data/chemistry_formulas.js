const chemistryFormulas = {
    "Organic Chemistry": [
        {
            "front": "C_nH_{2n+2}",
            "back": "C_nH_{2n+2}",
            "explanation": "General formula for Alkanes - saturated hydrocarbons with single bonds only."
        },
        {
            "front": "C_nH_{2n}",
            "back": "C_nH_{2n}",
            "explanation": "General formula for Alkenes - unsaturated hydrocarbons with one C=C double bond."
        },
        {
            "front": "C_nH_{2n-2}",
            "back": "C_nH_{2n-2}",
            "explanation": "General formula for Alkynes - unsaturated hydrocarbons with one C≡C triple bond."
        },
        {
            "front": "R-OH",
            "back": "R-OH \\quad \\text{or} \\quad C_nH_{2n+1}OH",
            "explanation": "General formula for Alcohols - hydroxyl (-OH) group attached to carbon."
        },
        {
            "front": "R-CHO",
            "back": "R-CHO \\quad \\text{or} \\quad C_nH_{2n+1}CHO",
            "explanation": "General formula for Aldehydes - carbonyl (C=O) at end of chain."
        },
        {
            "front": "R-CO-R'",
            "back": "R-CO-R' \\quad \\text{or} \\quad C_nH_{2n}O",
            "explanation": "General formula for Ketones - carbonyl (C=O) not at chain end."
        },
        {
            "front": "R-COOH",
            "back": "R-COOH \\quad \\text{or} \\quad C_nH_{2n+1}COOH",
            "explanation": "General formula for Carboxylic acids - contains -COOH functional group. Weak acids."
        },
        {
            "front": "R-COO-R'",
            "back": "R-COO-R' \\quad \\text{or} \\quad C_nH_{2n}O_2",
            "explanation": "General formula for Esters - derived from acid + alcohol. Pleasant fruity odors."
        },
        {
            "front": "\\text{H adds to C with more H}",
            "back": "\\text{H adds to C with more H}",
            "explanation": "Markovnikov's Rule - in addition of HX to alkene, H attaches to carbon with more hydrogens."
        },
        {
            "front": "\\text{CH}_3\\text{CH}_2\\text{CH}_3",
            "back": "\\text{Propane: } C_3H_8",
            "explanation": "IUPAC naming - prefix indicates carbon count: meth-1, eth-2, prop-3, but-4, pent-5..."
        },
        {
            "front": "1^\\circ \\to 2^\\circ \\to 3^\\circ",
            "back": "1^\\circ \\to \\text{aldehyde} \\to \\text{acid}; \\quad 2^\\circ \\to \\text{ketone}; \\quad 3^\\circ \\to \\text{no reaction}",
            "explanation": "Oxidation of alcohols - oxidizing agents: K₂Cr₂O₇/H₂SO₄, KMnO₄."
        },
        {
            "front": "\\text{Alkene} + H_2",
            "back": "\\text{Alkene} + H_2 \\xrightarrow{\\text{Ni, heat}} \\text{Alkane}",
            "explanation": "Hydrogenation - saturates double bond. Used in margarine production."
        },
        {
            "front": "\\text{Ester} + NaOH",
            "back": "\\text{Ester} + NaOH \\to \\text{Soap} + \\text{Glycerol}",
            "explanation": "Saponification - alkaline hydrolysis of esters. Soap = sodium salt of fatty acid."
        },
        {
            "front": "C_6H_6",
            "back": "C_6H_6: \\text{ Alternating double bonds, } 120^\\circ",
            "explanation": "Benzene structure - resonance hybrid, delocalized π electrons, undergoes electrophilic substitution."
        },
        {
            "front": "\\text{Br}_2 \\text{ water: brown} \\to \\text{colorless}",
            "back": "\\text{Decolorizes bromine}",
            "explanation": "Test for alkenes - unsaturation causes addition reaction with bromine."
        },
        {
            "front": "[Ag(NH_3)_2]^+",
            "back": "[Ag(NH_3)_2]^+ + R-C\\equiv CH \\to \\text{silver acetylide (white precipitate)}",
            "explanation": "Test for terminal alkynes - ammoniacal AgNO₃ gives white precipitate. Internal alkynes don't react."
        },
        {
            "front": "\\text{Tollens' reagent: Ag}^+",
            "back": "\\text{Aldehydes reduce Ag}^+ \\to \\text{Ag (silver mirror)}",
            "explanation": "Tollens' test - aldehydes give positive test (silver mirror). Ketones don't react."
        }
    ],
    "Physical Chemistry": [
        {
            "front": "n = \\frac{m}{M}",
            "back": "n = \\frac{m}{M} = \\frac{N}{N_A} = \\frac{V}{24} \\text{ (at STP)}",
            "explanation": "Mole concept - n = moles, m = mass (g), M = molar mass (g/mol), Nₐ = 6.022 × 10²³."
        },
        {
            "front": "M = \\frac{n}{V}",
            "back": "M = \\frac{n}{V} = \\frac{\\text{mass}/MW}{V}",
            "explanation": "Molarity - moles per liter of solution. Unit: mol/L or M. V must be in liters."
        },
        {
            "front": "m = \\frac{n}{kg(\\text{solvent})}",
            "back": "m = \\frac{n}{kg(\\text{solvent})}",
            "explanation": "Molality - moles per kg of solvent. Temperature independent (unlike molarity)."
        },
        {
            "front": "\\chi = \\frac{n_i}{n_{total}}",
            "back": "\\chi = \\frac{n_i}{n_{total}}",
            "explanation": "Mole fraction - ratio of moles of one component to total moles. Dimensionless. Sum = 1."
        },
        {
            "front": "PV = nRT",
            "back": "PV = nRT",
            "explanation": "Ideal Gas Equation - P = pressure (Pa), V = volume (m³), R = 8.314 J/mol·K, T = temperature (K)."
        },
        {
            "front": "P_{total} = P_1 + P_2 + P_3",
            "back": "P_{total} = P_1 + P_2 + P_3",
            "explanation": "Dalton's Law of Partial Pressures - total pressure = sum of partial pressures."
        },
        {
            "front": "\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}}",
            "back": "\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}}",
            "explanation": "Graham's Law - rate of effusion/diffusion inversely proportional to √molar mass."
        },
        {
            "front": "KE = \\frac{3}{2}RT",
            "back": "KE = \\frac{3}{2}RT",
            "explanation": "Average kinetic energy of gas molecules - depends only on temperature. Same for all gases."
        },
        {
            "front": "u_{rms} = \\sqrt{\\frac{3RT}{M}}",
            "back": "u_{rms} = \\sqrt{\\frac{3RT}{M}}",
            "explanation": "Root mean square speed - increases with T, decreases with molar mass."
        },
        {
            "front": "\\text{Rate} = k[A]^m[B]^n",
            "back": "\\text{Rate} = k[A]^m[B]^n",
            "explanation": "Rate law - m, n = reaction orders (experimentally determined). k = rate constant."
        },
        {
            "front": "t_{1/2} = \\frac{0.693}{k}",
            "back": "t_{1/2} = \\frac{0.693}{k}",
            "explanation": "Half-life for first order - independent of initial concentration."
        },
        {
            "front": "k = Ae^{-E_a/RT}",
            "back": "k = Ae^{-E_a/RT}",
            "explanation": "Arrhenius equation - higher activation energy Ea = slower reaction. Temperature increases k."
        },
        {
            "front": "K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}",
            "back": "K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}",
            "explanation": "Equilibrium constant (concentration) - products over reactants with stoichiometric coefficients."
        },
        {
            "front": "K_p = K_c(RT)^{\\Delta n}",
            "back": "K_p = K_c(RT)^{\\Delta n}",
            "explanation": "Equilibrium constant (pressure) - Δn = moles of gaseous products - moles of gaseous reactants."
        },
        {
            "front": "\\Delta G = \\Delta H - T\\Delta S",
            "back": "\\Delta G = \\Delta H - T\\Delta S",
            "explanation": "Gibbs Free Energy - ΔG < 0: spontaneous, ΔG > 0: non-spontaneous, ΔG = 0: equilibrium."
        },
        {
            "front": "\\Delta G = -RT \\ln K",
            "back": "\\Delta G = -RT \\ln K",
            "explanation": "Relation between Gibbs energy and equilibrium constant - more negative ΔG = larger K."
        },
        {
            "front": "\\Delta H = \\Sigma H(\\text{products}) - \\Sigma H(\\text{reactants})",
            "back": "\\Delta H = \\Sigma H(\\text{products}) - \\Sigma H(\\text{reactants})",
            "explanation": "Enthalpy change - heat content at constant pressure."
        },
        {
            "front": "\\Delta H = \\Sigma \\text{(bonds broken)} - \\Sigma \\text{(bonds formed)}",
            "back": "\\Delta H = \\Sigma \\text{(bonds broken)} - \\Sigma \\text{(bonds formed)}",
            "explanation": "Bond enthalpy method - positive = endothermic."
        },
        {
            "front": "q = mc\\Delta T",
            "back": "q = mc\\Delta T",
            "explanation": "Calorimetry - heat absorbed/released. m = mass, c = specific heat, ΔT = temperature change."
        },
        {
            "front": "pH = -\\log[H^+]",
            "back": "pH = -\\log[H^+]",
            "explanation": "pH definition - measures acidity. pH 7 = neutral, <7 = acidic, >7 = basic."
        },
        {
            "front": "pH = pK_a + \\log\\frac{[A^-]}{[HA]}",
            "back": "pH = pK_a + \\log\\frac{[A^-]}{[HA]}",
            "explanation": "Henderson-Hasselbalch equation - buffer equation. [A⁻]/[HA] = ratio of conjugate base to acid."
        },
        {
            "front": "K_{sp} = [A^+]^a[B^-]^b",
            "back": "K_{sp} = [A^+]^a[B^-]^b",
            "explanation": "Solubility product - determines maximum [ions] before precipitation."
        },
        {
            "front": "E = E^\\circ - \\frac{RT}{nF}\\ln Q",
            "back": "E = E^\\circ - \\frac{RT}{nF}\\ln Q",
            "explanation": "Nernst equation - cell potential under non-standard conditions."
        },
        {
            "front": "E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}",
            "back": "E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}",
            "explanation": "Standard cell potential - spontaneous if E°cell > 0. ΔG° = -nFE°."
        },
        {
            "front": "m = \\frac{ItM}{nF}",
            "back": "m = \\frac{ItM}{nF}",
            "explanation": "Faraday's laws of electrolysis - mass deposited = (current × time × atomic mass)/(valence × F)."
        }
    ],
    "Inorganic Chemistry": [
        {
            "front": "\\text{Properties vary periodically with atomic number}",
            "back": "\\text{Modern Periodic Law}",
            "explanation": "Elements arranged by increasing atomic number show periodic trends in properties."
        },
        {
            "front": "\\text{Decreases left} \\to \\text{right}, \\quad \\text{increases top} \\to \\text{bottom}",
            "back": "\\text{Atomic Radius Trend}",
            "explanation": "Right: increasing nuclear charge pulls electrons closer. Bottom: more electron shells."
        },
        {
            "front": "\\text{Increases left} \\to \\text{right}, \\quad \\text{decreases top} \\to \\text{bottom}",
            "back": "\\text{Ionization Energy Trend}",
            "explanation": "Right: higher nuclear attraction. Bottom: outer electron farther, easier to remove."
        },
        {
            "front": "F > O > N > Cl > S > C > H > \\text{metals}",
            "back": "\\text{Electronegativity (Pauling)}",
            "explanation": "Tendency to attract bonding electrons. Fluorine = 4.0 (most electronegative)."
        },
        {
            "front": "\\text{Maximum multiplicity in degenerate orbitals}",
            "back": "Hund's Rule",
            "explanation": "Electrons fill orbitals singly before pairing with parallel spins."
        },
        {
            "front": "1s \\to 2s \\to 2p \\to 3s \\to 3p \\to 4s \\to 3d \\to 4p",
            "back": "Aufbau Principle",
            "explanation": "Electrons fill orbitals in order of increasing energy based on (n+l) rule."
        },
        {
            "front": "\\text{No two electrons have same 4 quantum numbers}",
            "back": "Pauli Exclusion Principle",
            "explanation": "Maximum 2 electrons per orbital with opposite spins."
        },
        {
            "front": "180^\\circ, 120^\\circ, 109.5^\\circ, 90^\\circ",
            "back": "\\text{VSEPR geometries}",
            "explanation": "Linear, Trigonal planar, Tetrahedral, Trigonal bipyramidal, Octahedral angles."
        },
        {
            "front": "sp^3d^2",
            "back": "sp^3d^2: 6 \\text{ electron domains, octahedral}",
            "explanation": "One s + three p + two d combine to form 6 sp³d² orbitals. Examples: SF₆, IF₅."
        },
        {
            "front": "B.O. = \\frac{N_b - N_a}{2}",
            "back": "B.O. = \\frac{N_b - N_a}{2}",
            "explanation": "Bond order - higher BO = stronger bond, shorter length. Nb = bonding, Na = antibonding electrons."
        },
        {
            "front": "F, O, N \\text{ bonded to H}",
            "back": "\\text{Hydrogen Bonding}",
            "explanation": "Strong intermolecular force. Explains high boiling points of H₂O, NH₃, HF."
        },
        {
            "front": "\\text{Free} = 0; \\quad O = -2; \\quad H = +1; \\quad \\text{Grp 1} = +1; \\quad \\text{Grp 2} = +2",
            "back": "\\text{Oxidation Number Rules}",
            "explanation": "Assigned charges for redox balancing. Sum of oxidation numbers = charge on species."
        },
        {
            "front": "\\text{LEO: Loss of Electrons} = \\text{Oxidation}",
            "back": "\\text{GER: Gain of Electrons} = \\text{Reduction}",
            "explanation": "OIL RIG - Oxidation Is Loss, Reduction Is Gain. Always occur together (redox)."
        },
        {
            "front": "M_1V_1 = M_2V_2",
            "back": "M_1V_1 = M_2V_2",
            "explanation": "Dilution formula - moles before dilution = moles after. Used to prepare solutions from stock."
        },
        {
            "front": "\\text{% yield} = \\frac{\\text{Actual}}{\\text{Theoretical}} \\times 100",
            "back": "\\text{\\% yield}",
            "explanation": "Always ≤ 100% in realistic conditions."
        },
        {
            "front": "\\text{\\% purity} = \\frac{m_{pure}}{m_{sample}} \\times 100",
            "back": "\\text{\\% purity}",
            "explanation": "Impurities reduce purity below 100%. Used for commercial products."
        }
    ],
    "Electrochemistry": [
        {
            "front": "E^\\circ = \\text{potential vs SHE} = 0 \\text{ V}",
            "back": "E^\\circ = 0 \\text{ V for } H^+/H_2",
            "explanation": "Standard Electrode Potential - measured under standard conditions (1 M, 1 atm, 25°C)."
        },
        {
            "front": "E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} > 0",
            "back": "E^\\circ_{cell} > 0",
            "explanation": "Galvanic Cell - spontaneous redox. Anode = oxidation, Cathode = reduction."
        },
        {
            "front": "E^\\circ_{cell} < 0",
            "back": "E^\\circ_{cell} < 0",
            "explanation": "Electrolytic Cell - non-spontaneous. Requires external voltage input."
        },
        {
            "front": "m = \\frac{Q \\times M}{n \\times F}",
            "back": "m = \\frac{Q \\times M}{n \\times F}",
            "explanation": "Faraday's First Law - mass deposited = (charge × molar mass)/(valence × F)."
        },
        {
            "front": "\\frac{m_1}{m_2} = \\frac{M_1/n_1}{M_2/n_2}",
            "back": "\\frac{m_1}{m_2} = \\frac{M_1/n_1}{M_2/n_2}",
            "explanation": "Faraday's Second Law - same charge deposits masses proportional to equivalent mass."
        },
        {
            "front": "G = \\kappa \\frac{A}{l}",
            "back": "G = \\kappa \\frac{A}{l}",
            "explanation": "Conductance - κ = conductivity (S/m). Molar conductivity: Λm = κ × 1000/M."
        },
        {
            "front": "\\lambda^\\circ_m = \\Sigma \\lambda^\\circ_{\\text{ionic}}",
            "back": "\\lambda^\\circ_m = \\Sigma \\lambda^\\circ_{\\text{ionic}}",
            "explanation": "Kohlrausch's Law - molar conductivity at infinite dilution = sum of ionic conductivities."
        }
    ],
    "Environmental Chemistry": [
        {
            "front": "O_2 + UV \\to O + O",
            "back": "O_2 + UV \\to O + O; \\quad O + O_2 \\to O_3",
            "explanation": "Ozone formation in stratosphere - shields Earth from UV radiation."
        },
        {
            "front": "Cl \\cdot + O_3 \\to ClO + O_2",
            "back": "Cl \\cdot + O_3 \\to ClO + O_2; \\quad ClO + O \\to Cl \\cdot + O_2",
            "explanation": "Ozone depletion - CFCs release Cl· that catalytically destroys ozone."
        },
        {
            "front": "CO_2, CH_4, N_2O, CFCs, O_3",
            "back": "\\text{Greenhouse Gases}",
            "explanation": "Trap infrared radiation, warm Earth. CO₂ largest contributor."
        },
        {
            "front": "pH < 5.6",
            "back": "pH < 5.6 \\text{ (normal rain } \\approx 5.6 \\text{ due to } CO_2)",
            "explanation": "Acid rain - caused by SO₂, NOₓ from fossil fuels. SO₂ → H₂SO₄, NOₓ → HNO₃."
        },
        {
            "front": "COD",
            "back": "\\text{mg } O_2/L \\text{ needed to oxidize organic matter}",
            "back": "COD",
            "explanation": "Chemical Oxygen Demand - measures water pollution. Higher COD = more organic pollutants."
        },
        {
            "front": "BOD",
            "back": "\\text{mg } O_2/L \\text{ consumed by microorganisms}",
            "explanation": "Biochemical Oxygen Demand - organic matter decomposed by bacteria. Clean water: BOD < 3 mg/L."
        }
    ]
};

export default chemistryFormulas;
