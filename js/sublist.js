const EQUAL = 'EQUAL';
const UNEQUAL = 'UNEQUAL';
const SUBLIST = 'SUBLIST';
const SUPERLIST = 'SUPERLIST';

export class List {
  constructor(list) {
    this.list = list || [];
  }

  compare(other) {
    if (this.list.length === other.list.length) {
      return compare(this.list, other.list) ? EQUAL : UNEQUAL;
    }
    if (this.list.length < other.list.length) {
      return sliceCompare(this.list, other.list) ? SUBLIST : UNEQUAL;
    }
    return sliceCompare(other.list, this.list) ? SUPERLIST : UNEQUAL;
  }
}

function compare(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

function sliceCompare(small, large) {
  for (let i = 0; i + small.length <= large.length; i++) {
    if (compare(small, large.slice(i, i + small.length))) {
      return true;
    }
  }
  return false;
}