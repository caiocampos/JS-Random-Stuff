export class List {
  constructor(list = []) {
    this.values = list;
  }

  append(list) {
    return this.concat(new List([list]));
  }

  concat(list) {
    const values = this.values.slice(0);
    if (list) {
      for (const sub of list.values) {
        for (const el of sub.values) {
          values.push(el);
        }
      }
    }
    return new List(values);
  }

  filter(fn) {
    const values = [];
    for (const el of this.values) {
      if (fn(el)) {
        values.push(el);
      }
    }
    return new List(values);
  }

  map(fn) {
    const values = [];
    for (const el of this.values) {
      values.push(fn(el));
    }
    return new List(values);
  }

  length() {
    return this.values.length;
  }

  foldl(fn, init) {
    let acc = init;
    for (const el of this.values) {
      acc = fn(acc, el);
    }
    return acc;
  }

  foldr(fn, init) {
    let acc = init;
    for (let i = this.values.length - 1; i >= 0; i--) {
      acc = fn(acc, this.values[i]);
    }
    return acc;
  }

  reverse() {
    const values = [];
    for (const el of this.values) {
      values.unshift(el);
    }
    return new List(values);
  }
}
