export class Triangle {
  constructor(rowCount) {
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
      const row = [];
      for (let j = 0; j <= i; j++) {
        row.push(binomialCoefficient(i, j));
      }
      rows.push(row);
    }
    this.elements = rows;
  }

  get lastRow() {
    return this.elements[this.elements.length - 1];
  }

  get rows() {
    return this.elements;
  }
}

const fatBuffer = [1, 1, 2];

function binomialCoefficient(n, k) {
  const nf = factorial(n);
  const kf = factorial(k);
  return Math.trunc(nf / (kf * factorial(n - k)))
}

function factorial(n) {
  const min = fatBuffer.length;
  if (n > min - 1) {
    for (let i = min; i <= n; i++) {
      fatBuffer.push(i * fatBuffer[i - 1]);
    }
  }
  return fatBuffer[n];
}