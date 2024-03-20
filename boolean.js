function isPositive(A) {
    return A > 0;
}
console.log(isPositive(5)); 
console.log(isPositive(-3));
console.log(isPositive(0));

function isOdd(A) {
    return A % 2 !== 0;
}
console.log(isOdd(5));
console.log(isOdd(8));
console.log(isOdd(-3));

function checkInequality(A, B) {
    return A > 2 && B <= 3;
}
console.log(checkInequality(4, 3));
console.log(checkInequality(1, 2));
console.log(checkInequality(5, 1));

function checkInequality2(A, B) {
    return A >= 0 || B < -2;
}
console.log(checkInequality2(4, -3));
console.log(checkInequality2(-1, -2));
console.log(checkInequality2(0, 1));

function checkBetweenNumbers(A, B, C) {
  return (B > A && B < C) || (B < A && B > C);
}
console.log(checkBetweenNumbers(1, 2, 3));
console.log(checkBetweenNumbers(5, 5, 8));
console.log(checkBetweenNumbers(10, 7, 5));

function checkOddThreeDigitNumber(number) {
    if (typeof number !== 'number' || !Number.isInteger(number)) {
        return false;
    }
    if (number < 100 || number > 999) {
        return false; 
    }
    if (number % 2 === 0){
        return false;
    }
    return true;
}
// как это должно работать??????ааааааа!!!!!
console.log(checkOddThreeDigitNumber(135));
console.log(checkOddThreeDigitNumber(246));
console.log(checkOddThreeDigitNumber(-789));
console.log(checkOddThreeDigitNumber(2458));
console.log(checkOddThreeDigitNumber(31));

function checkUniqueDigits(number) {
    const digits = new Set();
    const numStr = Math.abs(number).toString();

    for (let digit of numStr) {
        if (digits.has(digit)) {
            return false;
        }
        digits.add(digit);
    }
    return true;
}
console.log(checkUniqueDigits(123));
console.log(checkUniqueDigits(122));
console.log(checkUniqueDigits(-987));
console.log(checkUniqueDigits(1234));
console.log(checkUniqueDigits(-77));

function isSecondQuadrant(x, y) {
    return x < 0 && y > 0;
}

console.log(isSecondQuadrant(-2, 3));
console.log(isSecondQuadrant(5, -1));
console.log(isSecondQuadrant(-1, -2));

function isIsoscelesTriangle(a, b, c) {
    if (a === b && b !== c) {
        return true;
    } else if (a === c && b !== c) {
        return true;
    } else if (b === c && a !== b) {
        return true;
    } else {
        return false;
    }
}

console.log(isIsoscelesTriangle(5, 5, 3)); 
console.log(isIsoscelesTriangle(4, 3, 4)); 
console.log(isIsoscelesTriangle(7, 7, 7));
console.log(isIsoscelesTriangle(2, 3, 4));

function areSameColorFields(x1, y1, X1, Y1) {
    let sum1 = x1 + y1;
    let sum2 = X1 + Y1;
    // Поля одинакового цвета, если суммы координат одинаковые или различаются на кратное 2 число
    return sum1 % 2 === sum2 % 2;
}

console.log(areSameColorFields(1, 1, 2, 2));
console.log(areSameColorFields(3, 4, 5, 6));
console.log(areSameColorFields(7, 8, 1, 3));

export{
    isPositive, isOdd, checkInequality, checkInequality2, checkBetweenNumbers, checkOddThreeDigitNumber, checkUniqueDigits, isSecondQuadrant, isIsoscelesTriangle, areSameColorFields
};
