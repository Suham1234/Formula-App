const mathFormulas = {
    "Algebra": [
        {
            "front": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
            "back": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
            "explanation": "Solves any quadratic equation ax² + bx + c = 0. The discriminant (b² - 4ac) determines the nature of roots."
        },
        {
            "front": "\\alpha + \\beta",
            "back": "\\alpha + \\beta = -\\frac{b}{a}",
            "explanation": "The sum of roots α and β of ax² + bx + c = 0 equals -b/a. Used when finding unknown coefficients."
        },
        {
            "front": "\\alpha \\beta",
            "back": "\\alpha \\beta = \\frac{c}{a}",
            "explanation": "The product of roots α and β of ax² + bx + c = 0 equals c/a. Essential for symmetric functions."
        },
        {
            "front": "(a + b)^n",
            "back": "(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k",
            "explanation": "Expands (a+b)ⁿ into sum of terms. C(n,k) is the binomial coefficient 'n choose k' = n!/k!(n-k)!."
        },
        {
            "front": "T_{k+1}",
            "back": "T_{k+1} = \\binom{n}{k} a^{n-k} b^k",
            "explanation": "The (k+1)th term in binomial expansion. Useful for finding specific terms without full expansion."
        },
        {
            "front": "a_n = a + (n-1)d",
            "back": "a_n = a + (n-1)d",
            "explanation": "The nth term of an AP with first term 'a' and common difference 'd'. Sum: Sₙ = n/2(2a + (n-1)d)."
        },
        {
            "front": "a_n = ar^{n-1}",
            "back": "a_n = ar^{n-1}",
            "explanation": "The nth term of a GP with first term 'a' and common ratio 'r'. Sum: Sₙ = a(rⁿ - 1)/(r-1) for r ≠ 1."
        },
        {
            "front": "a^m \\times a^n",
            "back": "a^m \\times a^n = a^{m+n}",
            "explanation": "When multiplying same base, add exponents. Also: (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ."
        },
        {
            "front": "\\log(ab)",
            "back": "\\log(ab) = \\log(a) + \\log(b)",
            "explanation": "Log of a product equals sum of logs. Also: log(a/b) = log(a) - log(b)."
        },
        {
            "front": "\\log(a^n)",
            "back": "\\log(a^n) = n \\cdot \\log(a)",
            "explanation": "Log of a power equals exponent times log of base. Also: logₐ(a) = 1, log(1) = 0."
        },
        {
            "front": "\\log_a(x)",
            "back": "\\log_a(x) = \\frac{\\log(x)}{\\log(a)}",
            "explanation": "Converts logarithm from base a to any other base. Useful for calculator calculations."
        },
        {
            "front": "^nP_r",
            "back": "^nP_r = \\frac{n!}{(n-r)!}",
            "explanation": "Number of ways to arrange r items from n items where order matters. Special case: n! when r=n."
        },
        {
            "front": "^nC_r",
            "back": "^nC_r = \\frac{n!}{r!(n-r)!}",
            "explanation": "Number of ways to choose r items from n where order doesn't matter. Equals C(n,r) = C(n, n-r)."
        },
        {
            "front": "\\frac{px+q}{(x-a)(x-b)}",
            "back": "\\frac{px+q}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}",
            "explanation": "Decomposes rational expressions into simpler fractions. A and B found by comparing coefficients."
        },
        {
            "front": "\\frac{px+q}{(x-a)(x^2+bx+c)}",
            "back": "\\frac{px+q}{(x-a)(x^2+bx+c)} = \\frac{A}{x-a} + \\frac{Bx+C}{x^2+bx+c}",
            "explanation": "For irreducible quadratic factors in denominator. The numerator is linear (Bx+C)."
        }
    ],
    "Trigonometry": [
        {
            "front": "\\sin(A + B)",
            "back": "\\sin A \\cos B + \\cos A \\sin B",
            "explanation": "Sine of sum of two angles. One of the fundamental addition formulas in trigonometry."
        },
        {
            "front": "\\sin(A - B)",
            "back": "\\sin A \\cos B - \\cos A \\sin B",
            "explanation": "Sine of difference of two angles. Note the sign change from plus to minus."
        },
        {
            "front": "\\cos(A + B)",
            "back": "\\cos A \\cos B - \\sin A \\sin B",
            "explanation": "Cosine of sum of two angles. Note the sign flip compared to sine formula."
        },
        {
            "front": "\\cos(A - B)",
            "back": "\\cos A \\cos B + \\sin A \\sin B",
            "explanation": "Cosine of difference of two angles. Note the sign is opposite to the sum formula."
        },
        {
            "front": "\\tan(A + B)",
            "back": "\\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}",
            "explanation": "Tangent of sum. Valid when denominator is not zero (A+B ≠ 90° + nπ)."
        },
        {
            "front": "\\tan(A - B)",
            "back": "\\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}",
            "explanation": "Tangent of difference. Valid when denominator is not zero."
        },
        {
            "front": "\\cot(A + B)",
            "back": "\\frac{\\cot A \\cot B - 1}{\\cot B + \\cot A}",
            "explanation": "Cotangent of sum of two angles. Can also be written as (1 - tan A tan B) / (tan A + tan B)."
        },
        {
            "front": "\\cot(A - B)",
            "back": "\\frac{\\cot A \\cot B + 1}{\\cot B - \\cot A}",
            "explanation": "Cotangent of difference. Note the sign difference from the sum formula."
        },
        {
            "front": "2\\sin A \\cos B",
            "back": "\\sin(A+B) + \\sin(A-B)",
            "explanation": "Product to sum conversion. Expresses product of sine and cosine as sum of sines."
        },
        {
            "front": "2\\cos A \\sin B",
            "back": "\\sin(A+B) - \\sin(A-B)",
            "explanation": "Product to sum conversion. Expresses product as difference of sines."
        },
        {
            "front": "2\\cos A \\cos B",
            "back": "\\cos(A+B) + \\cos(A-B)",
            "explanation": "Product to sum conversion. Expresses product of cosines as sum of cosines."
        },
        {
            "front": "2\\sin A \\sin B",
            "back": "\\cos(A-B) - \\cos(A+B)",
            "explanation": "Product to sum conversion. Expresses product of sines as difference of cosines."
        },
        {
            "front": "\\sin C + \\sin D",
            "back": "2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)",
            "explanation": "Sum to product identity. Converts sum of sines into product form."
        },
        {
            "front": "\\sin C - \\sin D",
            "back": "2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)",
            "explanation": "Difference to product identity. Converts difference of sines into product form."
        },
        {
            "front": "\\cos C + \\cos D",
            "back": "2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)",
            "explanation": "Sum to product identity. Converts sum of cosines into product form."
        },
        {
            "front": "\\cos C - \\cos D",
            "back": "2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{D-C}{2}\\right)",
            "explanation": "Difference to product identity. Note the (D-C) instead of (C-D) for proper sign."
        },
        {
            "front": "\\sin(A+B)\\sin(A-B)",
            "back": "\\sin^2 A - \\sin^2 B",
            "explanation": "Product of sum and difference of angles. Also equals cos² B - cos² A."
        },
        {
            "front": "\\cos(A+B)\\cos(A-B)",
            "back": "\\cos^2 A - \\sin^2 B",
            "explanation": "Product of sum and difference of angles. Also equals cos² B - sin² A."
        },
        {
            "front": "\\sin 2A",
            "back": "2\\sin A \\cos A",
            "explanation": "Double angle formula for sine. Most commonly used form."
        },
        {
            "front": "\\cos 2A",
            "back": "\\cos^2 A - \\sin^2 A",
            "explanation": "Standard form of cosine double angle. Can be rearranged to other forms."
        },
        {
            "front": "\\cos 2A",
            "back": "1 - 2\\sin^2 A",
            "explanation": "Cosine double angle expressed in terms of sine. Useful when sin A is known."
        },
        {
            "front": "\\cos 2A",
            "back": "2\\cos^2 A - 1",
            "explanation": "Cosine double angle expressed in terms of cosine. Useful when cos A is known."
        },
        {
            "front": "1 + \\cos 2A",
            "back": "2\\cos^2 A",
            "explanation": "Power reduction identity. Converts 1 + cos 2A to 2 cos² A."
        },
        {
            "front": "1 - \\cos 2A",
            "back": "2\\sin^2 A",
            "explanation": "Power reduction identity. Converts 1 - cos 2A to 2 sin² A."
        },
        {
            "front": "\\sin 2A",
            "back": "\\frac{2\\tan A}{1 + \\tan^2 A}",
            "explanation": "Sine double angle expressed in terms of tangent. Useful when tan A is known."
        },
        {
            "front": "\\cos 2A",
            "back": "\\frac{1 - \\tan^2 A}{1 + \\tan^2 A}",
            "explanation": "Cosine double angle expressed in terms of tangent. Related to tangent double angle."
        },
        {
            "front": "\\tan 2A",
            "back": "\\frac{2\\tan A}{1 - \\tan^2 A}",
            "explanation": "Tangent double angle. Valid when tan A ≠ ±1 (A ≠ 45°, 135°)."
        },
        {
            "front": "\\sin 3A",
            "back": "3\\sin A - 4\\sin^3 A",
            "explanation": "Triple angle formula for sine. Derived using sin(2A + A) and double angle formulas."
        },
        {
            "front": "\\cos 3A",
            "back": "4\\cos^3 A - 3\\cos A",
            "explanation": "Triple angle formula for cosine. Derived using cos(2A + A) and double angle formulas."
        },
        {
            "front": "\\tan 3A",
            "back": "\\frac{3\\tan A - \\tan^3 A}{1 - 3\\tan^2 A}",
            "explanation": "Triple angle formula for tangent. Denominator zero when tan A = ±1/√3 (A = 15°, 75°)."
        },
        {
            "front": "\\sin^2\\theta + \\cos^2\\theta",
            "back": "1",
            "explanation": "The fundamental Pythagorean identity. All other trigonometric identities derive from this."
        },
        {
            "front": "1 + \\tan^2\\theta",
            "back": "\\sec^2\\theta",
            "explanation": "Pythagorean identity. Also: 1 + cot²θ = cosec²θ."
        },
        {
            "front": "\\sin \\theta",
            "back": "\\frac{\\tan \\theta}{\\sqrt{1 + \\tan^2\\theta}}",
            "explanation": "Expresses sine in terms of tangent. Useful when only tan θ is known."
        },
        {
            "front": "\\cos \\theta",
            "back": "\\frac{1}{\\sqrt{1 + \\tan^2\\theta}}",
            "explanation": "Expresses cosine in terms of tangent. Combine with sin formula for complete solution."
        },
        {
            "front": "\\text{Area}",
            "back": "\\Delta = \\frac{1}{2}ab\\sin C",
            "explanation": "Area using two sides and included angle. Also: Δ = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2."
        },
        {
            "front": "\\frac{a}{\\sin A}",
            "back": "\\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R",
            "explanation": "Sine Rule - relates sides to opposite angles. R is circumradius. Used for ASA, SSA cases."
        },
        {
            "front": "a^2",
            "back": "b^2 + c^2 - 2bc\\cos A",
            "explanation": "Cosine Rule - relates three sides to one angle. Used for SSS or SAS cases."
        }
    ],
    "Coordinate Geometry": [
        {
            "front": "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}",
            "back": "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}",
            "explanation": "Distance between two points (x₁,y₁) and (x₂,y₂). Derived from Pythagorean theorem."
        },
        {
            "front": "P = \\left(\\frac{m_1x_2 + m_2x_1}{m_1+m_2}, \\frac{m_1y_2 + m_2y_1}{m_1+m_2}\\right)",
            "back": "P = \\left(\\frac{m_1x_2 + m_2x_1}{m_1+m_2}, \\frac{m_1y_2 + m_2y_1}{m_1+m_2}\\right)",
            "explanation": "Coordinates of point dividing line joining (x₁,y₁) and (x₂,y₂) in ratio m₁:m₂ internally."
        },
        {
            "front": "M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)",
            "back": "M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)",
            "explanation": "Special case of section formula with m₁ = m₂ = 1. Gives midpoint of any segment."
        },
        {
            "front": "m = \\frac{y_2-y_1}{x_2-x_1}",
            "back": "m = \\frac{y_2-y_1}{x_2-x_1} = \\tan\\theta",
            "explanation": "Slope or gradient. θ is angle with positive x-axis. Perpendicular slope = -1/m."
        },
        {
            "front": "(y - y_1) = m(x - x_1)",
            "back": "(y - y_1) = m(x - x_1)",
            "explanation": "Equation of line with slope m passing through (x₁,y₁). Used when one point and slope are known."
        },
        {
            "front": "\\frac{y - y_1}{x - x_1}",
            "back": "\\frac{y - y_1}{x - x_1} = \\frac{y_2-y_1}{x_2-x_1}",
            "explanation": "Equation of line passing through (x₁,y₁) and (x₂,y₂). Directly uses coordinates."
        },
        {
            "front": "y = mx + c",
            "back": "y = mx + c",
            "explanation": "Line with slope m and y-intercept c. Most common form for linear equations."
        },
        {
            "front": "Ax + By + C = 0",
            "back": "Ax + By + C = 0",
            "explanation": "General form. Slope = -A/B, y-intercept = -C/B. Any line can be written this way."
        },
        {
            "front": "d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}",
            "back": "d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}",
            "explanation": "Perpendicular distance from point (x₀,y₀) to line Ax + By + C = 0."
        },
        {
            "front": "\\tan\\theta",
            "back": "\\tan\\theta = \\left|\\frac{m_1 - m_2}{1 + m_1m_2}\\right|",
            "explanation": "Angle between lines with slopes m₁ and m₂. If m₁m₂ = -1, lines are perpendicular."
        },
        {
            "front": "(x-h)^2 + (y-k)^2 = r^2",
            "back": "(x-h)^2 + (y-k)^2 = r^2",
            "explanation": "Circle with center (h,k) and radius r. General form: x² + y² + 2gx + 2fy + c = 0."
        },
        {
            "front": "y^2 = 4ax",
            "back": "y^2 = 4ax",
            "explanation": "Parabola with vertex at origin, focus at (a,0). Directrix: x = -a. Latus rectum = 4a."
        },
        {
            "front": "\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1",
            "back": "\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1",
            "explanation": "Ellipse centered at origin. a > b gives horizontal major axis. Foci at (±c,0) where c² = a² - b²."
        },
        {
            "front": "\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1",
            "back": "\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1",
            "explanation": "Hyperbola centered at origin. Transverse axis along x. Foci at (±c,0) where c² = a² + b²."
        },
        {
            "front": "\\Delta = \\frac{1}{2}|x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)|",
            "back": "\\Delta = \\frac{1}{2}|x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)|",
            "explanation": "Area using coordinates of three vertices. Value is positive due to absolute value."
        }
    ],
    "Calculus": [
        {
            "front": "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
            "back": "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
            "explanation": "Definition of derivative as limit. Represents instantaneous rate of change or slope of tangent."
        },
        {
            "front": "\\frac{d}{dx}(x^n)",
            "back": "\\frac{d}{dx}(x^n) = nx^{n-1}",
            "explanation": "Bring down exponent as coefficient, reduce exponent by 1. Works for any real n."
        },
        {
            "front": "\\frac{d}{dx}(\\sin x)",
            "back": "\\frac{d}{dx}(\\sin x) = \\cos x",
            "explanation": "Derivative of sine is cosine. Also: d/dx(cos x) = -sin x, d/dx(tan x) = sec²x."
        },
        {
            "front": "\\frac{d}{dx}(e^x)",
            "back": "\\frac{d}{dx}(e^x) = e^x",
            "explanation": "eˣ is its own derivative! Also: d/dx(eᵃˣ) = aeᵃˣ, d/dx(aˣ) = aˣ ln(a)."
        },
        {
            "front": "\\frac{d}{dx}(\\ln x)",
            "back": "\\frac{d}{dx}(\\ln x) = \\frac{1}{x}",
            "explanation": "Derivative of natural log. Also: d/dx(logₐ x) = 1/(x ln a)."
        },
        {
            "front": "\\frac{d}{dx}(uv)",
            "back": "\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx}",
            "explanation": "Derivative of product of two functions. Remember: derivative of first times second, plus first times derivative of second."
        },
        {
            "front": "\\frac{d}{dx}\\left(\\frac{u}{v}\\right)",
            "back": "\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}",
            "explanation": "Derivative of quotient. Remember: derivative of top times bottom minus top times derivative of bottom, all over bottom squared."
        },
        {
            "front": "\\frac{d}{dx}[f(g(x))]",
            "back": "\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\times g'(x)",
            "explanation": "Derivative of composite function. Derivative of outer function evaluated at inner, times derivative of inner."
        },
        {
            "front": "\\int x^n \\, dx",
            "back": "\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C, \\quad n \\neq -1",
            "explanation": "Increase exponent by 1, divide by new exponent. Special case: ∫dx/x = ln|x| + C."
        },
        {
            "front": "\\int \\sin x \\, dx",
            "back": "\\int \\sin x \\, dx = -\\cos x + C",
            "explanation": "Integral of sine. Also: ∫cos x dx = sin x + C, ∫sec²x dx = tan x + C."
        },
        {
            "front": "\\int e^x \\, dx",
            "back": "\\int e^x \\, dx = e^x + C",
            "explanation": "Integral of eˣ is itself. Also: ∫eᵃˣ dx = eᵃˣ/a + C."
        },
        {
            "front": "\\int \\frac{1}{x} \\, dx",
            "back": "\\int \\frac{1}{x} \\, dx = \\ln|x| + C",
            "explanation": "Integral of reciprocal. The absolute value ensures domain validity for negative x."
        },
        {
            "front": "\\int u \\, dv",
            "back": "\\int u \\, dv = uv - \\int v \\, du",
            "explanation": "Used for products. LIATE rule: choose u from List (Log, Inverse trig, Algebraic, Trig, Exponential) in order."
        },
        {
            "front": "\\int_a^b f(x) \\, dx",
            "back": "\\int_a^b f(x) \\, dx = F(b) - F(a)",
            "explanation": "Definite integral equals antiderivative at upper minus lower limit. F is antiderivative of f."
        },
        {
            "front": "A = \\int_a^b f(x) \\, dx",
            "back": "A = \\int_a^b f(x) \\, dx",
            "explanation": "Area between curve y=f(x), x-axis, and lines x=a, x=b. Use absolute value if curve crosses x-axis."
        }
    ],
    "Statistics & Probability": [
        {
            "front": "\\bar{x} = \\frac{\\sum x_i}{n}",
            "back": "\\bar{x} = \\frac{\\sum x_i}{n}",
            "explanation": "Arithmetic mean of n values. Sum of all values divided by count."
        },
        {
            "front": "\\sigma^2",
            "back": "\\sigma^2 = \\frac{\\sum(x_i - \\bar{x})^2}{n} = \\frac{\\sum x_i^2}{n} - \\bar{x}^2",
            "explanation": "Measures spread. Second form is computationally easier. Standard deviation σ = √σ²."
        },
        {
            "front": "P(A \\cup B)",
            "back": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
            "explanation": "Probability of A or B or both. Subtract intersection to avoid double counting."
        },
        {
            "front": "P(A|B)",
            "back": "P(A|B) = \\frac{P(A \\cap B)}{P(B)}",
            "explanation": "Probability of A given B has occurred. Also: P(A∩B) = P(A)P(B|A)."
        },
        {
            "front": "P(A \\cap B)",
            "back": "P(A \\cap B) = P(A) \\times P(B)",
            "explanation": "Events A and B are independent if P(A|B) = P(A). Then P(A and B) = product of individual probabilities."
        },
        {
            "front": "P(A|B)",
            "back": "P(A|B) = \\frac{P(B|A)P(A)}{P(B)}",
            "explanation": "Bayes' Theorem - updates probability based on new evidence. Useful for reverse conditional probability problems."
        },
        {
            "front": "P(X=r)",
            "back": "P(X=r) = \\binom{n}{r} p^r q^{n-r}, \\quad q = 1-p",
            "explanation": "Binomial distribution - probability of exactly r successes in n independent trials."
        },
        {
            "front": "E(X)",
            "back": "E(X) = np",
            "explanation": "Expected number of successes in binomial distribution. Also variance = npq, standard deviation = √(npq)."
        },
        {
            "front": "Z = \\frac{X - \\mu}{\\sigma}",
            "back": "Z = \\frac{X - \\mu}{\\sigma}",
            "explanation": "Standardization formula. Converts any normal variable X to standard normal Z with mean 0, SD 1."
        },
        {
            "front": "\\binom{n}{r} + \\binom{n}{r-1}",
            "back": "\\binom{n}{r} + \\binom{n}{r-1} = \\binom{n+1}{r}",
            "explanation": "Pascal's identity. Foundation of Pascal's triangle and binomial expansion coefficients."
        }
    ],
    "Complex Numbers": [
        {
            "front": "z = a + ib",
            "back": "z = a + ib, \\quad i = \\sqrt{-1}",
            "explanation": "Standard form. a is real part, b is imaginary part. i² = -1 is fundamental property."
        },
        {
            "front": "|z|",
            "back": "|z| = \\sqrt{a^2 + b^2}",
            "explanation": "Modulus of z - distance of point (a,b) from origin. Always non-negative. |z|² = z × z̄."
        },
        {
            "front": "\\arg(z)",
            "back": "\\arg(z) = \\tan^{-1}\\left(\\frac{b}{a}\\right)",
            "explanation": "Argument of z - angle made with positive real axis. Principal value: -π < arg(z) ≤ π."
        },
        {
            "front": "z = r(\\cos\\theta + i\\sin\\theta)",
            "back": "z = r(\\cos\\theta + i\\sin\\theta) = r \\ cis \\ \\theta",
            "explanation": "Polar form using modulus r and argument θ. Alternative notation: z = r∠θ."
        },
        {
            "front": "e^{i\\theta}",
            "back": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
            "explanation": "Euler's formula - links exponential and trigonometric functions. Allows: z = re^(iθ) in polar form."
        },
        {
            "front": "[r(\\cos\\theta + i\\sin\\theta)]^n",
            "back": "[r(\\cos\\theta + i\\sin\\theta)]^n = r^n(\\cos n\\theta + i\\sin n\\theta)",
            "explanation": "De Moivre's theorem - for integer n. Raises modulus to n, multiplies argument by n. Used for roots too."
        },
        {
            "front": "\\omega = e^{2\\pi ik/n}",
            "back": "\\omega = e^{2\\pi ik/n}, \\quad k = 0,1,2,\\ldots,n-1",
            "explanation": "nth roots of unity - solutions to zⁿ = 1. Sum of all nth roots = 0. Product of roots = (-1)ⁿ⁻¹."
        },
        {
            "front": "z + \\bar{z}, \\quad z - \\bar{z}",
            "back": "z + \\bar{z} = 2a, \\quad z - \\bar{z} = 2ib, \\quad z \\times \\bar{z} = |z|^2",
            "explanation": "Conjugate properties - useful for finding modulus, real and imaginary parts. Conjugate z̄ = a - ib."
        }
    ],
    "Vectors": [
        {
            "front": "\\vec{a} + \\vec{b}",
            "back": "\\vec{a} + \\vec{b} = (a_1+b_1, a_2+b_2, a_3+b_3)",
            "explanation": "Add corresponding components. Also: k\vec{a} = (ka₁, ka₂, ka₃) for scalar multiplication."
        },
        {
            "front": "\\vec{a} \\cdot \\vec{b}",
            "back": "\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta = a_1b_1 + a_2b_2 + a_3b_3",
            "explanation": "Dot product (scalar product). If \vec{a} · \vec{b} = 0, vectors are perpendicular. Also: \vec{a} · \vec{a} = |\vec{a}|²."
        },
        {
            "front": "\\vec{a} \\times \\vec{b}",
            "back": "\\vec{a} \\times \\vec{b} = |\\vec{a}||\\vec{b}|\\sin\\theta \\hat{n}",
            "explanation": "Cross product (vector product). Result is perpendicular to both. |\vec{a} × \vec{b}| = area of parallelogram."
        },
        {
            "front": "\\vec{a} \\times \\vec{b}",
            "back": "\\vec{a} \\times \\vec{b} = (a_2b_3 - a_3b_2, a_3b_1 - a_1b_3, a_1b_2 - a_2b_1)",
            "explanation": "Component form of cross product. Can remember as determinant of 3×3 matrix with i, j, k in first row."
        },
        {
            "front": "\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})",
            "back": "\\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = \\begin{vmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{vmatrix}",
            "explanation": "Scalar triple product = volume of parallelepiped. Equal to determinant."
        },
        {
            "front": "\\vec{a} \\times (\\vec{b} \\times \\vec{c})",
            "back": "\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = \\vec{b}(\\vec{a} \\cdot \\vec{c}) - \\vec{c}(\\vec{a} \\cdot \\vec{b})",
            "explanation": "BAC-CAB rule. Important vector identity. Result is a vector lying in plane of \vec{b} and \vec{c}."
        },
        {
            "front": "\\hat{a}",
            "back": "\\hat{a} = \\frac{\\vec{a}}{|\\vec{a}|}",
            "explanation": "Unit vector with magnitude 1 in direction of \vec{a}. Useful for expressing directions."
        },
        {
            "front": "\\text{proj}_{\\vec{b}} \\vec{a}",
            "back": "\\text{proj}_{\\vec{b}} \\vec{a} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2} \\vec{b}",
            "explanation": "Vector projection of \vec{a} on \vec{b}. Scalar projection = (\vec{a} · \vec{b})/|\vec{b}|."
        }
    ],
    "Sets & Functions": [
        {
            "front": "(A \\cup B)'",
            "back": "(A \\cup B)' = A' \\cap B' \\quad \\text{and} \\quad (A \\cap B)' = A' \\cup B'",
            "explanation": "De Morgan's Laws - complement of union is intersection of complements, and vice versa."
        },
        {
            "front": "n(A \\cup B)",
            "back": "n(A \\cup B) = n(A) + n(B) - n(A \\cap B)",
            "explanation": "Cardinality of union. Subtract intersection to avoid double counting elements."
        },
        {
            "front": "(f \\circ g)(x)",
            "back": "(f \\circ g)(x) = f(g(x))",
            "explanation": "Function composition - apply g first, then f. Not commutative: f∘g ≠ g∘f generally."
        },
        {
            "front": "f^{-1}(x)",
            "back": "f^{-1}(x) \\text{ exists iff } f \\text{ is one-to-one}",
            "explanation": "Horizontal line test: no horizontal line cuts graph more than once. Then f(f⁻¹(x)) = x."
        },
        {
            "front": "f(-x) = f(x)",
            "back": "f(-x) = f(x)",
            "explanation": "Even function - symmetric about y-axis. Examples: x², cos x, |x|."
        },
        {
            "front": "f(-x) = -f(x)",
            "back": "f(-x) = -f(x)",
            "explanation": "Odd function - symmetric about origin. Examples: x³, sin x, tan x."
        }
    ]
};

export default mathFormulas;
