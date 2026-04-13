const chemistryReactions = {
    "Periodic Properties & Chemical Bonding": [
        {
            "front": "Na \\quad + \\quad Cl",
            "back": "2Na + Cl_2 \\rightarrow 2NaCl",
            "explanation": "Ionic bond formation - Na loses e⁻ to form Na⁺, Cl gains e⁻ to form Cl⁻. Strong electrostatic attraction in NaCl lattice."
        },
        {
            "front": "Mg \\quad + \\quad O_2",
            "back": "2Mg + O_2 \\rightarrow 2MgO",
            "explanation": "Ionic bond formation - Mg loses 2 e⁻ to form Mg²⁺, O gains 2 e⁻ to form O²⁻. Highly exothermic combustion."
        },
        {
            "front": "H \\quad + \\quad H \\quad + \\quad Cl \\quad + \\quad Cl",
            "back": "H_2 + Cl_2 \\rightarrow 2HCl",
            "explanation": "Covalent bond formation - shared electron pair between H and Cl. Results in polar covalent HCl molecule."
        },
        {
            "front": "C \\quad + \\quad O_2",
            "back": "C + O_2 \\rightarrow CO_2",
            "explanation": "Covalent bond formation - double bond between C and O in CO₂. Linear molecule, 180° bond angle."
        },
        {
            "front": "N \\quad + \\quad H",
            "back": "N_2 + 3H_2 \\rightleftharpoons 2NH_3",
            "explanation": "Haber process - covalent bonds in NH₃. 3 N-H single bonds. Requires Fe catalyst, high T & P."
        },
        {
            "front": "Na \\rightarrow Na^+ + e^-",
            "back": "Na \\rightarrow Na^+ + e^-",
            "explanation": "First ionization - removing outermost electron. Energy required = first ionization energy (496 kJ/mol for Na)."
        },
        {
            "front": "Cl + e^- \\rightarrow Cl^-",
            "back": "Cl + e^- \\rightarrow Cl^-",
            "explanation": "Electron affinity - energy released when electron added. Cl has high electron affinity (349 kJ/mol)."
        },
        {
            "front": "Metal \\quad + \\quad Non-metal",
            "back": "\\text{Metal} \\rightarrow \\text{Metal}^+ + e^- \\quad (\\text{oxidation})",
            "explanation": "Metallic bonding concept - metals lose electrons to form cations. Delocalized electrons create electron sea."
        },
        {
            "front": "BeCl_2 \\text{ (electron deficient)}",
            "back": "\\text{Be: } 1s^2 2s^2 \\rightarrow \\text{BeCl}_2 \\text{ (dimerizes: } Be_2Cl_4 \\text{)}",
            "explanation": "BeCl₂ is electron deficient - Be has only 4 valence electrons. Forms polymeric structures or dimerizes."
        },
        {
            "front": "BF_3 + NH_3",
            "back": "BF_3 + NH_3 \\rightarrow F_3B\\leftarrow NH_3",
            "explanation": "Coordinate/dative bond - NH₃ donates lone pair to empty p-orbital of B. Forms coordinate covalent bond."
        },
        {
            "front": "Carbon \\text{ hybridization}",
            "back": "sp^3: \\text{tetrahedral } 109.5^\\circ; \\quad sp^2: \\text{trigonal planar } 120^\\circ; \\quad sp: \\text{linear } 180^\\circ",
            "explanation": "VSEPR & hybridization - sp³ (4 bonds), sp² (3 bonds), sp (2 bonds). Angle depends on repulsion."
        },
        {
            "front": "PCl_5 \\text{ (central atom)}",
            "back": "PCl_5 \\rightarrow \\text{trigonal bipyramidal}",
            "explanation": "sp³d hybridization - 5 electron domains. 3 equatorial (120°), 2 axial (90°). Used in phosphorus chemistry."
        },
        {
            "front": "SF_6 \\text{ (central atom)}",
            "back": "SF_6 \\rightarrow \\text{octahedral}",
            "explanation": "sp³d² hybridization - 6 bonding pairs, 90° angles. Sulfur expands octet. No lone pairs."
        },
        {
            "front": "H_2O \\text{ shape}",
            "back": "H_2O: \\text{bent/V-shape, } 104.5^\\circ \\text{ (2 lone pairs, 2 bond pairs)}",
            "explanation": "VSEPR: 4 electron domains, 2 bonded + 2 lone pairs. Lone pair repulsion compresses angle from 109.5°."
        },
        {
            "front": "NH_3 \\text{ shape}",
            "back": "NH_3: \\text{trigonal pyramidal, } 107^\\circ \\text{ (1 lone pair, 3 bond pairs)}",
            "explanation": "VSEPR: 4 electron domains, 3 bonded + 1 lone pair. Lone pair compresses angle from 109.5°."
        }
    ],
    "Quantitative Chemistry": [
        {
            "front": "HCl + NaOH",
            "back": "HCl + NaOH \\rightarrow NaCl + H_2O",
            "explanation": "Strong acid-strong base neutralization. Heat of neutralization ≈ -57.3 kJ/mol. pH at equivalence = 7."
        },
        {
            "front": "H_2SO_4 + NaOH",
            "back": "H_2SO_4 + 2NaOH \\rightarrow Na_2SO_4 + 2H_2O",
            "explanation": "Diprotic acid neutralization. 2 moles NaOH per mole H₂SO₄. Key for titration calculations."
        },
        {
            "front": "CH_3COOH + NaOH",
            "back": "CH_3COOH + NaOH \\rightarrow CH_3COONa + H_2O",
            "explanation": "Weak acid-strong base. pH at equivalence > 7 (acetate hydrolysis). Indicator: phenolphthalein."
        },
        {
            "front": "AgNO_3 + NaCl",
            "back": "AgNO_3 + NaCl \\rightarrow AgCl + NaNO_3",
            "explanation": "Precipitation reaction - AgCl is insoluble white precipitate. Used to test for chloride ions."
        },
        {
            "front": "BaCl_2 + Na_2SO_4",
            "back": "BaCl_2 + Na_2SO_4 \\rightarrow BaSO_4 + 2NaCl",
            "explanation": "Precipitation reaction - BaSO₄ is white precipitate. Used to test for sulfate ions. Very insoluble."
        },
        {
            "front": "Pb(NO_3)_2 + KI",
            "back": "Pb(NO_3)_2 + 2KI \\rightarrow PbI_2 + 2KNO_3",
            "explanation": "Precipitation: PbI₂ is bright yellow precipitate. 'Golden sink' test. Soluble in hot water."
        },
        {
            "front": "Ca(OH)_2 + CO_2",
            "back": "Ca(OH)_2 + CO_2 \\rightarrow CaCO_3 + H_2O",
            "explanation": "Limewater test for CO₂. CaCO₃ is white precipitate. Turns limewater milky/bary."
        },
        {
            "front": "C_xH_y + O_2",
            "back": "C_xH_y + (x + y/4)O_2 \\rightarrow xCO_2 + (y/2)H_2O",
            "explanation": "General combustion of hydrocarbons. Complete combustion - CO₂ + H₂O. Exothermic reaction."
        },
        {
            "front": "CH_4 + O_2",
            "back": "CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O",
            "explanation": "Methane combustion. Natural gas burning. Highly exothermic. Products: CO₂ + H₂O + heat."
        },
        {
            "front": "C_6H_12O_6 + O_2",
            "back": "C_6H_12O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O",
            "explanation": "Glucose combustion/respiration. Cellular respiration equation. Energy released for metabolism."
        },
        {
            "front": "Fe_2O_3 + C",
            "back": "2Fe_2O_3 + 3C \\rightarrow 4Fe + 3CO_2",
            "explanation": "Blast furnace reaction - iron ore reduction. Coke (C) reduces Fe₂O₃ to Fe. Key in steel production."
        },
        {
            "front": "Al_2O_3 + NaOH",
            "back": "Al_2O_3 + 2NaOH \\rightarrow 2NaAlO_2 + H_2O",
            "explanation": "Alumina digestion in Bayer's process. Amphoteric oxide dissolution. NaAlO₂ = sodium aluminate."
        }
    ],
    "Chemical Reactions": [
        {
            "front": "H_2 + O_2",
            "back": "2H_2 + O_2 \\rightarrow 2H_2O",
            "explanation": "Combination (synthesis) - two elements combine. Explosive reaction. H₂ + ½O₂ → H₂O also valid."
        },
        {
            "front": "N_2 + H_2",
            "back": "N_2 + 3H_2 \\rightleftharpoons 2NH_3",
            "explanation": "Combination - Haber process for ammonia. Reversible. High T (500°C), high P (200 atm), Fe catalyst."
        },
        {
            "front": "Fe + S",
            "back": "Fe + S \\rightarrow FeS",
            "explanation": "Combination - iron sulfide formation. Exothermic. Requires heating to initiate. Product: iron(II) sulfide."
        },
        {
            "front": "CaCO_3",
            "back": "CaCO_3 \\rightarrow CaO + CO_2",
            "explanation": "Decomposition - thermal decomposition of limestone. Endothermic. Requires ~900°C. Industrial: cement production."
        },
        {
            "front": "2H_2O_2",
            "back": "2H_2O_2 \\rightarrow 2H_2O + O_2",
            "explanation": "Decomposition - hydrogen peroxide. Catalyzed by MnO₂ or light. Oxygen gas evolution."
        },
        {
            "front": "2KClO_3",
            "back": "2KClO_3 \\rightarrow 2KCl + 3O_2",
            "explanation": "Decomposition - oxygen preparation in lab. MnO₂ catalyst. KClO₃ melts then decomposes."
        },
        {
            "front": "Zn + CuSO_4",
            "back": "Zn + CuSO_4 \\rightarrow ZnSO_4 + Cu",
            "explanation": "Single displacement - Zn is more reactive than Cu. Zn displaces Cu. Blue solution fades."
        },
        {
            "front": "Fe + CuSO_4",
            "back": "Fe + CuSO_4 \\rightarrow FeSO_4 + Cu",
            "explanation": "Single displacement - Fe displaces Cu. Iron nail in CuSO₄ solution gets copper coating."
        },
        {
            "front": "Mg + HCl",
            "back": "Mg + 2HCl \\rightarrow MgCl_2 + H_2",
            "explanation": "Single displacement - active metal with acid. H₂ gas evolution (pop test positive). Vigorous reaction."
        },
        {
            "front": "Na + H_2O",
            "back": "2Na + 2H_2O \\rightarrow 2NaOH + H_2",
            "explanation": "Single displacement - alkali metal with water. Very vigorous. NaOH formed (alkaline solution). Pop sound."
        },
        {
            "front": "AgNO_3 + NaCl",
            "back": "AgNO_3 + NaCl \\rightarrow AgCl + NaNO_3",
            "explanation": "Double displacement - precipitate formed. AgCl = white. Used in qualitative analysis."
        },
        {
            "front": "BaCl_2 + H_2SO_4",
            "back": "BaCl_2 + H_2SO_4 \\rightarrow BaSO_4 + 2HCl",
            "explanation": "Double displacement - BaSO₄ white precipitate. Key test for sulfate. Used in gravimetric analysis."
        },
        {
            "front": "Na_2CO_3 + HCl",
            "back": "Na_2CO_3 + 2HCl \\rightarrow 2NaCl + H_2O + CO_2",
            "explanation": "Carbonate + acid - effervescence of CO₂. Used to test carbonates. Equation same for all carbonates."
        },
        {
            "front": "Zn + HCl",
            "back": "Zn + 2HCl \\rightarrow ZnCl_2 + H_2",
            "explanation": "Metal + acid displacement. Lab preparation of H₂. Zn is moderate reactivity (not too violent)."
        },
        {
            "front": "Fe_2O_3 + Al",
            "back": "Fe_2O_3 + 2Al \\rightarrow 2Fe + Al_2O_3",
            "explanation": "Thermite reaction - Al is more reactive than Fe. Highly exothermic. Fe produced in molten state."
        },
        {
            "front": "KMnO_4 + HCl",
            "back": "2KMnO_4 + 16HCl \\rightarrow 2KCl + 2MnCl_2 + 5Cl_2 + 8H_2O",
            "explanation": "Redox - KMnO₄ oxidizes HCl to Cl₂. Purple to colorless. Lab preparation of chlorine gas."
        },
        {
            "front": "Cu + HNO_3 \\text{ (conc.)}",
            "back": "Cu + 4HNO_3 \\rightarrow Cu(NO_3)_2 + 2NO_2 + 2H_2O",
            "explanation": "Redox with conc. HNO₃ - NO₂ (brown gas). Cu is oxidized, HNO₃ reduced. Nitrate test confirmation."
        },
        {
            "front": "Cu + HNO_3 \\text{ (dil.)}",
            "back": "3Cu + 8HNO_3 \\rightarrow 3Cu(NO_3)_2 + 2NO + 4H_2O",
            "explanation": "Redox with dil. HNO₃ - NO (colorless, then brown). More reduction product with dilute acid."
        }
    ]
};

export default chemistryReactions;
