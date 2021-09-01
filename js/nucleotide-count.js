export class NucleotideCounts {
  static parse(strand) {
    const counter = { g: 0, c: 0, t: 0, a: 0 };
    for (let i = 0; i < strand.length; i++) {
      const c = strand.charAt(i).toLowerCase();
      if ('gcta'.indexOf(c) < 0) {
        throw new Error('Invalid nucleotide in strand');
      }
      counter[c] += 1;
    }
    return `${counter.a} ${counter.c} ${counter.g} ${counter.t}`;
  }
}
