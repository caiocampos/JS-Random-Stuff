export class Triangle {
  constructor(rowCount) {
    this.elements = fill(rowCount);
  }

  get lastRow() {
    return this.elements[this.elements.length - 1];
  }

  get rows() {
    return this.elements;
  }
}

function fill(rowCount) {
  const rows = [];
  for (let i = 0; i < rowCount; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      const el = j == 0 || j == i ? 1 : rows[i - 1][j] + rows[i - 1][j - 1];
      row.push(el);
    }
    rows.push(row);
  }
  return rows;
}