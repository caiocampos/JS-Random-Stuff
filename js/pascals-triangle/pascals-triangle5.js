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
    const row = leftRightPairs(rows[i - 1]).map(sumPair);
    rows.push(row);
  }
  return rows;
}

function leftRightPairs(priorRow) {
  const row = [];
  for (let i = 0; i <= priorRow.length; i++) {
    const el = [(priorRow[i] | 0), (priorRow[i - 1] | 0)];
    row.push(el);
  }
  return row;
}

function sumPair(elements) {
  return elements[0] + elements[1];
}