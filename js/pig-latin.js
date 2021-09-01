export class translator {
  static translate(frase) {
    return frase.split(' ').map(translateWord).join(' ');
  }
}

function translateWord(word) {
  if (!isVowelSound(word.slice(0, 2))) {
    let [cluster, left, el, last] = ['', word];
    while ((el = left.charAt(0)).length) {
      if (!(el === 'u' && last === 'q') && ((last && (el === 'y')) || isVowel(el))) {
        return `${left}${cluster}ay`;
      }
      cluster += el;
      [left, last] = [left.slice(1), el];
    }
  }
  return `${word}ay`;
}

function isVowel(c) {
  return 'aeiou'.indexOf(c) >= 0;
}

function isVowelSound(s) {
  return isVowel(s.charAt(0)) || ['xr', 'yt'].indexOf(s) >= 0;
}