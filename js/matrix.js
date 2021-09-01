export class Matrix {
  constructor(matrixString) {
    this.matrix = matrixString.split('\n').map(row => row.split(' ').map(n => Number(n)));
  }

  get rows() {
    return this.matrix.map(row => row.slice(0));
  }

  get columns() {
    const range = [...Array(this.matrix[0].length).keys()];
    return range.map(i => this.matrix.map(row => row[i]));
  }
}
