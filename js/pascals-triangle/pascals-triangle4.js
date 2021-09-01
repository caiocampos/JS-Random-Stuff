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
  if (!rowCount) {
    return [];
  }
  const rows = [[1]];
  for (let i = 1; i < rowCount; i++) {
    const row = [...Array(i + 1).keys()].map(j => (rows[i - 1][j] | 0) + (rows[i - 1][j - 1] | 0));
    rows.push(row);
  }
  return rows;
}