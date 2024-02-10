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

export {
  calculateDistance, calculateSegmentProduct, calculateKilobytes, calculateSegments, calculateDigitSum,
};
