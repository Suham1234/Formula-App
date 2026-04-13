const physicsFormulas = {
    "Mechanics": [
        {
            "front": "v = u + at",
            "back": "v = u + at",
            "explanation": "First equation of motion - final velocity = initial velocity + acceleration × time. For constant acceleration only."
        },
        {
            "front": "s = ut + \\frac{1}{2}at^2",
            "back": "s = ut + \\frac{1}{2}at^2",
            "explanation": "Second equation of motion - displacement = initial velocity × time + half × acceleration × time²."
        },
        {
            "front": "v^2 = u^2 + 2as",
            "back": "v^2 = u^2 + 2as",
            "explanation": "Third equation of motion - relates velocity and displacement without time. Useful when time is not given."
        },
        {
            "front": "F = ma",
            "back": "F = ma",
            "explanation": "Newton's Second Law - force equals mass times acceleration. Foundation of classical mechanics."
        },
        {
            "front": "W = mg",
            "back": "W = mg",
            "explanation": "Weight = mass × gravitational acceleration. g = 9.8 m/s² on Earth. Weight varies with g, mass doesn't."
        },
        {
            "front": "p = mv",
            "back": "p = mv",
            "explanation": "Linear momentum = mass × velocity. Vector quantity. Conservation: total momentum before = after collision."
        },
        {
            "front": "J = F\\Delta t",
            "back": "J = F\\Delta t = \\Delta p = mv - mu",
            "explanation": "Impulse-Momentum Theorem - impulse equals change in momentum. Area under F-t graph gives impulse."
        },
        {
            "front": "W = Fd\\cos\\theta",
            "back": "W = Fd\\cos\\theta = \\Delta KE",
            "explanation": "Work done = force × displacement × cos(angle). When θ=0 (force parallel to motion), W = Fd."
        },
        {
            "front": "KE = \\frac{1}{2}mv^2",
            "back": "KE = \\frac{1}{2}mv^2",
            "explanation": "Kinetic energy = half × mass × velocity². Always positive. Unit: Joule (J)."
        },
        {
            "front": "PE = mgh",
            "back": "PE = mgh",
            "explanation": "Gravitational potential energy = mass × g × height. Depends on height, not path taken."
        },
        {
            "front": "KE_1 + PE_1",
            "back": "KE_1 + PE_1 = KE_2 + PE_2",
            "explanation": "Conservation of mechanical energy - total energy conserved in absence of external forces."
        },
        {
            "front": "P = \\frac{W}{t}",
            "back": "P = \\frac{W}{t} = Fv",
            "explanation": "Power = rate of doing work. Also: P = ΔE/Δt. Unit: Watt (W). 1 HP ≈ 746 W."
        },
        {
            "front": "F = \\frac{mv^2}{r}",
            "back": "F = \\frac{mv^2}{r} = mr\\omega^2",
            "explanation": "Centripetal force - required for circular motion. Always directed toward center."
        },
        {
            "front": "a = \\frac{v^2}{r}",
            "back": "a = \\frac{v^2}{r} = r\\omega^2",
            "explanation": "Centripetal acceleration - acceleration toward center during circular motion."
        },
        {
            "front": "F = G\\frac{m_1 m_2}{r^2}",
            "back": "F = G\\frac{m_1 m_2}{r^2}",
            "explanation": "Newton's Law of Gravitation. G = 6.674 × 10⁻¹¹ Nm²/kg². Always attractive."
        },
        {
            "front": "g = G\\frac{M}{r^2}",
            "back": "g = G\\frac{M}{r^2}",
            "explanation": "Gravitational field strength at distance r from mass M. On Earth's surface: g = GM/R²."
        },
        {
            "front": "v_e = \\sqrt{\\frac{2GM}{R}}",
            "back": "v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}",
            "explanation": "Escape velocity - minimum velocity to escape gravitational field. ≈ 11.2 km/s from Earth."
        },
        {
            "front": "v_o = \\sqrt{\\frac{GM}{r}}",
            "back": "v_o = \\sqrt{\\frac{GM}{r}} = \\sqrt{gr}",
            "explanation": "Orbital velocity for circular orbit at distance r. Escape velocity = √2 × orbital velocity."
        },
        {
            "front": "F = -kx",
            "back": "F = -kx",
            "explanation": "Hooke's Law - spring force proportional to extension x. k = spring constant (N/m)."
        },
        {
            "front": "PE = \\frac{1}{2}kx^2",
            "back": "PE = \\frac{1}{2}kx^2",
            "explanation": "Elastic potential energy stored in stretched/compressed spring."
        },
        {
            "front": "L = I\\omega",
            "back": "L = I\\omega = mvr",
            "explanation": "Angular momentum - rotational analog of linear momentum. Conserved in absence of external torque."
        },
        {
            "front": "\\tau = rF\\sin\\theta",
            "back": "\\tau = rF\\sin\\theta = I\\alpha",
            "explanation": "Torque = rotational force. r = perpendicular distance from pivot. α = angular acceleration."
        },
        {
            "front": "I = mr^2",
            "back": "I = mr^2",
            "explanation": "Moment of inertia for point mass at distance r from axis. For extended bodies: I = Σmr²."
        },
        {
            "front": "KE = \\frac{1}{2}I\\omega^2",
            "back": "KE = \\frac{1}{2}I\\omega^2",
            "explanation": "Rotational kinetic energy. Total KE for rolling = (1/2)mv² + (1/2)Iω²."
        },
        {
            "front": "T = 2\\pi\\sqrt{\\frac{L}{g}}",
            "back": "T = 2\\pi\\sqrt{\\frac{L}{g}}",
            "explanation": "Simple pendulum period. Valid for small oscillations. L = length, g = gravitational acceleration."
        },
        {
            "front": "T = 2\\pi\\sqrt{\\frac{m}{k}}",
            "back": "T = 2\\pi\\sqrt{\\frac{m}{k}}",
            "explanation": "Spring-mass system period. m = mass, k = spring constant."
        }
    ],
    "Thermodynamics": [
        {
            "front": "Q = mc\\Delta T",
            "back": "Q = mc\\Delta T",
            "explanation": "Heat transfer (calorimetry) - heat = mass × specific heat × temperature change."
        },
        {
            "front": "Q = mL",
            "back": "Q = mL",
            "explanation": "Latent heat - heat for phase change. L = specific latent heat (J/kg)."
        },
        {
            "front": "\\Delta U = Q - W",
            "back": "\\Delta U = Q - W",
            "explanation": "First Law of Thermodynamics - change in internal energy = heat added - work done by system."
        },
        {
            "front": "PV = nRT",
            "back": "PV = nRT",
            "explanation": "Ideal Gas Equation. P = pressure, V = volume, n = moles, R = 8.314 J/mol·K, T = temperature (K)."
        },
        {
            "front": "P_1 V_1 = P_2 V_2",
            "back": "P_1 V_1 = P_2 V_2",
            "explanation": "Boyle's Law - at constant temperature, pressure inversely proportional to volume."
        },
        {
            "front": "\\frac{V_1}{T_1} = \\frac{V_2}{T_2}",
            "back": "\\frac{V_1}{T_1} = \\frac{V_2}{T_2}",
            "explanation": "Charles's Law - at constant pressure, volume directly proportional to temperature (Kelvin)."
        },
        {
            "front": "\\frac{P_1}{T_1} = \\frac{P_2}{T_2}",
            "back": "\\frac{P_1}{T_1} = \\frac{P_2}{T_2}",
            "explanation": "Pressure Law - at constant volume, pressure directly proportional to temperature (Kelvin)."
        },
        {
            "front": "C_V = \\frac{f}{2}R",
            "back": "C_V = \\frac{f}{2}R",
            "explanation": "Molar specific heat at constant volume. f = degrees of freedom. R = 8.314 J/mol·K."
        },
        {
            "front": "C_P = C_V + R",
            "back": "C_P = C_V + R",
            "explanation": "Mayer's relation - molar specific heat at constant P is always greater than at constant V."
        },
        {
            "front": "PV^\\gamma = \\text{constant}",
            "back": "PV^\\gamma = \\text{constant}",
            "explanation": "Adiabatic process - no heat exchange (Q=0). γ = Cₚ/Cᵥ."
        },
        {
            "front": "\\eta = 1 - \\frac{Q_2}{Q_1}",
            "back": "\\eta = 1 - \\frac{Q_2}{Q_1} = 1 - \\frac{T_2}{T_1}",
            "explanation": "Carnot engine efficiency - maximum theoretical efficiency. Q₁ = heat absorbed, Q₂ = heat rejected."
        },
        {
            "front": "\\Delta S = \\frac{Q}{T}",
            "back": "\\Delta S = \\frac{Q}{T}",
            "explanation": "Entropy change for reversible process. Second law: total entropy always increases."
        },
        {
            "front": "E = \\sigma T^4",
            "back": "E = \\sigma T^4",
            "explanation": "Stefan-Boltzmann Law - total radiant energy per unit area. σ = 5.67 × 10⁻⁸ W/m²·K⁴."
        },
        {
            "front": "\\lambda_m T = b",
            "back": "\\lambda_m T = b = 2.898 \\times 10^{-3} \\text{ m·K}",
            "explanation": "Wien's Displacement Law - peak wavelength inversely proportional to temperature."
        }
    ],
    "Waves & Optics": [
        {
            "front": "v = f\\lambda",
            "back": "v = f\\lambda",
            "explanation": "Wave equation - wave speed = frequency × wavelength. Fundamental relationship for all waves."
        },
        {
            "front": "T = \\frac{1}{f}",
            "back": "T = \\frac{1}{f}",
            "explanation": "Period-frequency relation - period T is time for one complete cycle. Units: Hz."
        },
        {
            "front": "v = \\sqrt{\\frac{T}{\\mu}}",
            "back": "v = \\sqrt{\\frac{T}{\\mu}}",
            "explanation": "Wave speed on string. T = tension, μ = linear mass density (mass/length)."
        },
        {
            "front": "n = \\frac{c}{v}",
            "back": "n = \\frac{c}{v} = \\frac{\\sin i}{\\sin r}",
            "explanation": "Refractive index - ratio of speed in vacuum to speed in medium. Also equals sin i/sin r (Snell's law)."
        },
        {
            "front": "\\sin C = \\frac{n_2}{n_1}",
            "back": "\\sin C = \\frac{n_2}{n_1}",
            "explanation": "Critical angle - angle of incidence for total internal reflection. Only exists when n₁ > n₂."
        },
        {
            "front": "\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}",
            "back": "\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}",
            "explanation": "Lens formula - relation between object distance u, image distance v, and focal length f."
        },
        {
            "front": "m = -\\frac{v}{u}",
            "back": "m = -\\frac{v}{u} = \\frac{h'}{h}",
            "explanation": "Linear magnification - negative sign indicates inverted image. |m| > 1 means enlarged."
        },
        {
            "front": "\\frac{1}{f} = (n-1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)",
            "back": "\\frac{1}{f} = (n-1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)",
            "explanation": "Lens maker's formula - relates focal length to refractive index and radii of curvature."
        },
        {
            "front": "\\beta = \\frac{\\lambda D}{d}",
            "back": "\\beta = \\frac{\\lambda D}{d}",
            "explanation": "Double slit fringe width - spacing between adjacent bright/dark fringes."
        },
        {
            "front": "a\\sin\\theta = n\\lambda",
            "back": "a\\sin\\theta = n\\lambda",
            "explanation": "Single slit diffraction minima - first minimum at a sin θ = λ."
        },
        {
            "front": "d\\sin\\theta = n\\lambda",
            "back": "d\\sin\\theta = n\\lambda",
            "explanation": "Diffraction grating - used for precise wavelength measurement."
        },
        {
            "front": "f' = f\\frac{v \\pm v_o}{v \\mp v_s}",
            "back": "f' = f\\frac{v \\pm v_o}{v \\mp v_s}",
            "explanation": "Doppler effect - observed frequency change. Upper signs: approaching, lower signs: receding."
        },
        {
            "front": "KE_{max} = hf - \\phi",
            "back": "KE_{max} = hf - \\phi",
            "explanation": "Photoelectric effect - maximum kinetic energy = photon energy - work function."
        },
        {
            "front": "\\lambda = \\frac{h}{p}",
            "back": "\\lambda = \\frac{h}{p} = \\frac{h}{mv}",
            "explanation": "de Broglie wavelength - matter wave wavelength. Important in quantum mechanics."
        }
    ],
    "Electricity & Magnetism": [
        {
            "front": "F = k\\frac{q_1 q_2}{r^2}",
            "back": "F = k\\frac{q_1 q_2}{r^2}",
            "explanation": "Coulomb's Law - electrostatic force between charges. k = 9 × 10⁹ Nm²/C². Inverse square law."
        },
        {
            "front": "E = \\frac{F}{q}",
            "back": "E = \\frac{F}{q} = k\\frac{Q}{r^2}",
            "explanation": "Electric field - force per unit charge. Direction: away from positive, toward negative."
        },
        {
            "front": "V = k\\frac{Q}{r}",
            "back": "V = k\\frac{Q}{r}",
            "explanation": "Electric potential - electric potential energy per unit charge. Scalar quantity."
        },
        {
            "front": "V = Ed",
            "back": "V = Ed",
            "explanation": "Potential difference for uniform field - work done per unit charge. V = W/q."
        },
        {
            "front": "C = \\frac{Q}{V}",
            "back": "C = \\frac{Q}{V}",
            "explanation": "Capacitance - ability to store charge. Unit: Farad (F). For parallel plate: C = ε₀A/d."
        },
        {
            "front": "U = \\frac{1}{2}CV^2",
            "back": "U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}",
            "explanation": "Energy stored in capacitor - same form as PE = (1/2)kx² for springs."
        },
        {
            "front": "I = \\frac{Q}{t}",
            "back": "I = \\frac{Q}{t} = neAv_d",
            "explanation": "Current = charge flow per unit time. n = charge carrier density, A = cross-section, v_d = drift velocity."
        },
        {
            "front": "V = IR",
            "back": "V = IR",
            "explanation": "Ohm's Law - voltage = current × resistance. Fundamental circuit law."
        },
        {
            "front": "P = IV",
            "back": "P = IV = I^2R = \\frac{V^2}{R}",
            "explanation": "Power in circuit - three equivalent forms. Unit: Watt (W)."
        },
        {
            "front": "R_s = R_1 + R_2",
            "back": "R_s = R_1 + R_2 + R_3",
            "explanation": "Resistors in series - same current through all. Total resistance increases."
        },
        {
            "front": "\\frac{1}{R_p}",
            "back": "\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}",
            "explanation": "Resistors in parallel - same voltage across all. Total resistance decreases."
        },
        {
            "front": "\\varepsilon = I(R + r)",
            "back": "\\varepsilon = I(R + r)",
            "explanation": "EMF equation - terminal voltage V = ε - Ir due to internal resistance r."
        },
        {
            "front": "B = \\frac{\\mu_0 I}{2\\pi r}",
            "back": "B = \\frac{\\mu_0 I}{2\\pi r}",
            "explanation": "Magnetic field around long straight wire. μ₀ = 4π × 10⁻⁷ Tm/A."
        },
        {
            "front": "B = \\mu_0 nI",
            "back": "B = \\mu_0 nI",
            "explanation": "Magnetic field inside solenoid. n = turns per unit length. Nearly uniform inside."
        },
        {
            "front": "\\varepsilon = -N\\frac{d\\Phi}{dt}",
            "back": "\\varepsilon = -N\\frac{d\\Phi}{dt}",
            "explanation": "Faraday's Law - induced EMF = -N × rate of change of magnetic flux. Negative sign: Lenz's law."
        },
        {
            "front": "\\varepsilon = BLv",
            "back": "\\varepsilon = BLv",
            "explanation": "EMF induced in rod moving perpendicular to magnetic field B."
        },
        {
            "front": "V_s / V_p",
            "back": "\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}",
            "explanation": "Transformer equation - step up/down voltage. N = number of turns."
        },
        {
            "front": "I_{rms} = \\frac{I_m}{\\sqrt{2}}",
            "back": "I_{rms} = \\frac{I_m}{\\sqrt{2}}, \\quad V_{rms} = \\frac{V_m}{\\sqrt{2}}",
            "explanation": "RMS values for AC. Power: P_avg = V_rms × I_rms × cos φ."
        }
    ],
    "Modern Physics": [
        {
            "front": "E = mc^2",
            "back": "E = mc^2",
            "explanation": "Mass-Energy Equivalence - Einstein's famous equation. Foundation of nuclear physics."
        },
        {
            "front": "E = hf",
            "back": "E = hf = \\frac{hc}{\\lambda}",
            "explanation": "Photon energy - h = 6.626 × 10⁻³⁴ Js (Planck's constant). Higher frequency = more energy."
        },
        {
            "front": "\\lambda = \\frac{h}{mv}",
            "back": "\\lambda = \\frac{h}{mv}",
            "explanation": "de Broglie wavelength - matter waves. All particles have wave properties."
        },
        {
            "front": "\\Delta x \\cdot \\Delta p \\geq \\frac{\\hbar}{2}",
            "back": "\\Delta x \\cdot \\Delta p \\geq \\frac{\\hbar}{2}",
            "explanation": "Heisenberg Uncertainty Principle - cannot simultaneously know exact position and momentum."
        },
        {
            "front": "KE_{max} = hf - \\phi",
            "back": "KE_{max} = hf - \\phi",
            "explanation": "Photoelectric equation - Einstein's explanation of photoelectric effect."
        },
        {
            "front": "mvr = \\frac{nh}{2\\pi}",
            "back": "mvr = \\frac{nh}{2\\pi} = n\\hbar",
            "explanation": "Bohr's quantized angular momentum - n = quantum number (1, 2, 3...)."
        },
        {
            "front": "E_n = -\\frac{13.6}{n^2} \\text{ eV}",
            "back": "E_n = -\\frac{13.6}{n^2} \\text{ eV}",
            "explanation": "Hydrogen energy levels - negative because bound states have lower energy than free electron."
        },
        {
            "front": "\\frac{1}{\\lambda} = R\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)",
            "back": "\\frac{1}{\\lambda} = R\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)",
            "explanation": "Rydberg formula - wavelength of emitted/absorbed photon. R = 1.097 × 10⁷ m⁻¹."
        },
        {
            "front": "N = N_0 e^{-\\lambda t}",
            "back": "N = N_0 e^{-\\lambda t}",
            "explanation": "Radioactive decay law - number of undecayed nuclei at time t."
        },
        {
            "front": "T_{1/2} = \\frac{\\ln 2}{\\lambda}",
            "back": "T_{1/2} = \\frac{\\ln 2}{\\lambda} = \\frac{0.693}{\\lambda}",
            "explanation": "Half-life - time for half the nuclei to decay."
        },
        {
            "front": "A = \\lambda N",
            "back": "A = \\lambda N",
            "explanation": "Activity - decay rate in disintegrations per second. Unit: Becquerel (Bq)."
        },
        {
            "front": "E = \\Delta mc^2",
            "back": "E = \\Delta mc^2",
            "explanation": "Binding energy - energy released when nucleus forms from nucleons."
        }
    ],
    "Gravitation & Relativity": [
        {
            "front": "F = G\\frac{m_1 m_2}{r^2}",
            "back": "F = G\\frac{m_1 m_2}{r^2}",
            "explanation": "Universal Gravitation - every mass attracts every other mass. G = 6.674 × 10⁻¹¹ Nm²/kg²."
        },
        {
            "front": "g = G\\frac{M}{r^2}",
            "back": "g = G\\frac{M}{r^2}",
            "explanation": "Gravitational field strength at distance r from center of mass M."
        },
        {
            "front": "V = -G\\frac{M}{r}",
            "back": "V = -G\\frac{M}{r}",
            "explanation": "Gravitational potential - potential energy per unit mass. Negative for bound systems."
        },
        {
            "front": "v_e = \\sqrt{\\frac{2GM}{r}}",
            "back": "v_e = \\sqrt{\\frac{2GM}{r}} = \\sqrt{2gR}",
            "explanation": "Escape velocity - minimum velocity to escape gravitational field."
        },
        {
            "front": "v_o = \\sqrt{\\frac{GM}{r}}",
            "back": "v_o = \\sqrt{\\frac{GM}{r}}",
            "explanation": "Orbital velocity for circular orbit. Related: v_e = √2 × v_o."
        },
        {
            "front": "t = \\frac{t_0}{\\sqrt{1 - v^2/c^2}}",
            "back": "t = \\frac{t_0}{\\sqrt{1 - v^2/c^2}}",
            "explanation": "Time dilation - moving clock runs slower. t₀ = proper time."
        },
        {
            "front": "L = L_0\\sqrt{1 - v^2/c^2}",
            "back": "L = L_0\\sqrt{1 - v^2/c^2}",
            "explanation": "Length contraction - moving objects contract along direction of motion."
        },
        {
            "front": "m = \\frac{m_0}{\\sqrt{1 - v^2/c^2}}",
            "back": "m = \\frac{m_0}{\\sqrt{1 - v^2/c^2}}",
            "explanation": "Relativistic mass - mass increases with velocity. Infinite at v = c."
        },
        {
            "front": "E = mc^2",
            "back": "E = mc^2 = \\frac{m_0 c^2}{\\sqrt{1 - v^2/c^2}}",
            "explanation": "Relativistic energy - total energy includes kinetic energy. Rest energy: E₀ = m₀c²."
        },
        {
            "front": "E^2 = (pc)^2 + (m_0 c^2)^2",
            "back": "E^2 = (pc)^2 + (m_0 c^2)^2",
            "explanation": "Energy-momentum relation - for massless: E = pc."
        }
    ],
    "Properties of Matter": [
        {
            "front": "\\sigma = \\frac{F}{A}",
            "back": "\\sigma = \\frac{F}{A}",
            "explanation": "Stress = force per unit cross-sectional area. Unit: Pa (N/m²)."
        },
        {
            "front": "\\varepsilon = \\frac{\\Delta L}{L}",
            "back": "\\varepsilon = \\frac{\\Delta L}{L}",
            "explanation": "Strain = fractional change in length. Dimensionless quantity."
        },
        {
            "front": "Y = \\frac{\\sigma}{\\varepsilon}",
            "back": "Y = \\frac{\\sigma}{\\varepsilon} = \\frac{FL}{A\\Delta L}",
            "explanation": "Young's modulus - measure of stiffness. Higher Y = harder to stretch."
        },
        {
            "front": "K = -V\\frac{\\Delta P}{\\Delta V}",
            "back": "K = -V\\frac{\\Delta P}{\\Delta V}",
            "explanation": "Bulk modulus - resistance to compression. Reciprocal of compressibility."
        },
        {
            "front": "\\gamma = \\frac{F}{L}",
            "back": "\\gamma = \\frac{F}{L}",
            "explanation": "Surface tension - force per unit length along surface. Unit: N/m or J/m²."
        },
        {
            "front": "h = \\frac{2\\gamma\\cos\\theta}{\\rho g r}",
            "back": "h = \\frac{2\\gamma\\cos\\theta}{\\rho g r}",
            "explanation": "Capillarity - height liquid rises in capillary of radius r."
        },
        {
            "front": "F = \\eta A\\frac{dv}{dx}",
            "back": "F = \\eta A\\frac{dv}{dx}",
            "explanation": "Viscosity - force needed for laminar flow. η = coefficient of viscosity."
        },
        {
            "front": "F = 6\\pi\\eta rv",
            "back": "F = 6\\pi\\eta rv",
            "explanation": "Stokes' Law - drag force on sphere falling through fluid."
        },
        {
            "front": "P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}",
            "back": "P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}",
            "explanation": "Bernoulli's equation - conservation of energy for fluid flow."
        },
        {
            "front": "A_1 v_1 = A_2 v_2",
            "back": "A_1 v_1 = A_2 v_2",
            "explanation": "Continuity equation - mass conservation in fluid flow. For incompressible fluid."
        }
    ],
    "Oscillations": [
        {
            "front": "x = A\\sin(\\omega t + \\phi)",
            "back": "x = A\\sin(\\omega t + \\phi)",
            "explanation": "Simple Harmonic Motion - A = amplitude, ω = angular frequency, φ = phase constant."
        },
        {
            "front": "\\omega = 2\\pi f",
            "back": "\\omega = 2\\pi f = \\sqrt{\\frac{k}{m}}",
            "explanation": "Angular frequency - rate of oscillation. For spring-mass: ω = √(k/m)."
        },
        {
            "front": "T = 2\\pi\\sqrt{\\frac{L}{g}}",
            "back": "T = 2\\pi\\sqrt{\\frac{L}{g}}",
            "explanation": "Simple pendulum period - depends only on length L and gravity g."
        },
        {
            "front": "T = 2\\pi\\sqrt{\\frac{m}{k}}",
            "back": "T = 2\\pi\\sqrt{\\frac{m}{k}}",
            "explanation": "Spring-mass system period - m = oscillating mass, k = spring constant."
        },
        {
            "front": "v = \\omega\\sqrt{A^2 - x^2}",
            "back": "v = \\omega\\sqrt{A^2 - x^2}",
            "explanation": "Velocity in SHM - maximum at center (x=0), zero at extremes."
        },
        {
            "front": "a = -\\omega^2 x",
            "back": "a = -\\omega^2 x",
            "explanation": "Acceleration in SHM - proportional to displacement, directed toward equilibrium."
        },
        {
            "front": "Q = \\frac{\\omega_0}{2\\beta}",
            "back": "Q = \\frac{\\omega_0}{2\\beta}",
            "explanation": "Quality factor - measure of damping. High Q = low energy loss, sharp resonance."
        }
    ]
};

export default physicsFormulas;
