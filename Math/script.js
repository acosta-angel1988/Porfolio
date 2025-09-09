// Example JavaScript in script.js
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function simplifyFraction(numerator, denominator) {
    if (denominator === 0) return "Undefined";
    const commonDivisor = gcd(Math.abs(numerator), Math.abs(denominator));
    return `${numerator / commonDivisor}/${denominator / commonDivisor}`;
}

function calculateFraction() {
    const num1 = parseInt(document.getElementById('numerator1').value);
    const den1 = parseInt(document.getElementById('denominator1').value);
    const num2 = parseInt(document.getElementById('numerator2').value);
    const den2 = parseInt(document.getElementById('denominator2').value);
    const operation = document.getElementById('operation').value;

    if (isNaN(num1) || isNaN(den1) || isNaN(num2) || isNaN(den2) || den1 === 0 || den2 === 0) {
        document.getElementById('result').innerText = "Please enter valid numbers and non-zero denominators.";
        return;
    }

    let resultNumerator, resultDenominator;

    switch (operation) {
        case '+':
            resultNumerator = (num1 * den2) + (num2 * den1);
            resultDenominator = den1 * den2;
            break;
        case '-':
            resultNumerator = (num1 * den2) - (num2 * den1);
            resultDenominator = den1 * den2;
            break;
        case '*':
            resultNumerator = num1 * num2;
            resultDenominator = den1 * den2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('result').innerText = "Cannot divide by zero.";
                return;
            }
            resultNumerator = num1 * den2;
            resultDenominator = den1 * num2;
            break;
        default:
            document.getElementById('result').innerText = "Invalid operation.";
            return;
    }

    document.getElementById('result').innerText = simplifyFraction(resultNumerator, resultDenominator);
}