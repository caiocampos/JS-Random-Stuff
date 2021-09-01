export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0
      || this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.c + this.a <= this.b) {
      throw Error('Is not a triangle');
    }
    const ab = this.a === this.b;
    const bc = this.b === this.c;
    if (ab && bc) {
      return 'equilateral';
    }
    const ca = this.c === this.a;
    if (ab || bc || ca) {
      return 'isosceles';
    }
    return 'scalene';
  }
}