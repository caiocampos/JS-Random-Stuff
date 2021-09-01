const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export class Diamond {
  makeDiamond(letter) {
    const index = LETTERS.indexOf(letter);
    const size = 2 * index + 1;
    let res = '';

    for (let i = 0, pos = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        res += (j - pos === index || j + pos === index) ? LETTERS[pos] : ' ';
      }
      pos += i < index ? 1 : -1;
      res += '\n';
    }
    return res;
  }
}
