function calculateDistance(x1, x2) {
  return Math.abs(x2 - x1);
}
console.log(calculateDistance(5, 10));

function calculateSegmentProduct(a, b, c) {
  const lengthAC = Math.abs(c - a);
  const lengthBC = Math.abs(b - c);
  return lengthAC * lengthBC;
}
console.log(calculateSegmentProduct(-1, 12, 7));

function calculateKilobytes(bytes) {
  return Math.floor(bytes / 1024);
}
console.log(calculateKilobytes(2048));

function calculateSegments(A, B) {
  return Math.floor(A / B);
}
console.log(calculateSegments(10, 3));

const calculateDigitSum = (x) => {
  const des = Math.floor(x / 10);
  const ed = x % 10;
  return des + ed;
};
console.log(calculateDigitSum(47));

function getHundredsDigit(number) {
  if (number <= 999) {
    return 0;
  }
  return Math.floor((number / 100) % 10);
}
console.log(getHundredsDigit(1234));

function getFullHours(N) {
  const fullHours = Math.floor(N / 3600);
  return fullHours;
}
console.log(getFullHours(3600));

function getDayOfWeek(K) {
  const dayOfWeek = (K) % 7;
  return dayOfWeek;
}
console.log(getDayOfWeek(10));

function countSquares(A, B, C) {
  // Вычисляем количество возможных квадратов по вертикали и горизонтали
  const squaresVertical = Math.floor(A / C);
  const squaresHorizontal = Math.floor(B / C);
  // Возвращаем произведение количества квадратов по вертикали и горизонтали
  return squaresVertical * squaresHorizontal;
}
console.log(countSquares(10, 10, 5));

function swapHundredsAndTens(num) {
  return `${num % 10}${Math.floor(num / 10) % 10}${Math.floor(num / 100)}`;
}
console.log(swapHundredsAndTens(123));

export {
  calculateDistance, calculateSegmentProduct, calculateKilobytes, calculateSegments, calculateDigitSum,
  countSquares, getDayOfWeek, getFullHours, getHundredsDigit, swapHundredsAndTens,
};
