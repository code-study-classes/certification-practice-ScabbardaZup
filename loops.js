function sumOfSquares(A, B) {
    let sum = 0;
    
    for (let i = A; i <= B; i++) {
        sum += i * i;
    }
    
    return sum;
}
console.log(sumOfSquares(2, 5));

function power(A, N) {
    let result = 1;
    
    for(let i = 1; i <= N; i++) {
      result *= A;
    }
    
    return result;
}
console.log(power(2, 3));


function factorialProduct(N) {
    let result = 1;
    
    for (let i = 1; i <= N; i++) {
      result *= i;
    }
    
    return result;
}
console.log(factorialProduct(3));

function fibonacciSequence(N) {
    let a = 0;
    let b = 1;
    let result = 0;

    if (N === 1) {
        return b; 
    }

    for (let i = 2; i <= N; i++) {
        result = a + b;
        a = b;
        b = result;
    }

    return result;
}

console.log(fibonacciSequence(1));

function sumOfPowers(N) {
    let result = 0;
    
    for (let i = 1; i <= N; i++) {
      let power = 1;
      for (let j = 1; j <= i; j++) {
        power *= i;
      }
      result += power;
    }
    
    return result;
}
console.log(sumOfPowers(3));

function remainingLength(A, B) {
    if (A <= B) {
      return 0; 
    }
    
    let count = 0;
    
    while (A >= B) {
      A -= B;
      count++;
    }
    
    return A;
}
console.log(remainingLength(10, 3));


function findExponent(N) {
    let exponent = 0;
    let powerOfTwo = 1;
    
    while (powerOfTwo < N) {
      powerOfTwo *= 2;
      exponent++;
    }
    
    return exponent;
}
console.log(findExponent(8));

function findMinKAndSum(N) {
    let sum = 0;
    let K = 1;
    
    while (sum < N) {
      sum += K;
      K++;
    }
    
    return K - 1;
}
console.log(findMinKAndSum(20));

function calculateGCD(A, B) {
    let a = A;
    let b = B;
    
    while (b !== 0) {
      let temp = a;
      a = b;
      b = temp % b;
    }
    
    return a;
}
console.log(calculateGCD(48, 18));

function findFibonacciIndex(N) {
    let a = 0;
    let b = 1;
    let index = 1;
  
    while (b < N) {
      let temp = b;
      b = a + b;
      a = temp;
      index++;
    }
  
    return index;
}
console.log(findFibonacciIndex(13));
export {
    sumOfSquares, power, factorialProduct, fibonacciSequence, sumOfPowers, remainingLength, findExponent, findMinKAndSum, calculateGCD, findFibonacciIndex
}