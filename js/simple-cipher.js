const A = 97;
const MAX = 26;
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

export class Cipher {
  constructor(key = randomKey()) {
    this.cKey = key;
  }

  encode(text) {
    return cipher(this.cKey, text);
  }

  decode(text) {
    return cipher(this.cKey, text, true);
  }

  get key() {
    return this.cKey;
  }
}

function cipher(key, text, inverse = false) {
  let res = '';
  for (let i = 0; i < text.length; i++) {
    const k = key.charCodeAt(i % key.length) - A;
    const encrypted = ((text.charCodeAt(i) - A) + keyFactor(k, inverse)) % MAX;
    res += String.fromCharCode(encrypted + A);
  }
  return res;
}

function keyFactor(code, inverse) {
  return inverse ? MAX - code : code;
}

function randomNum(max) {
  return Math.round(Math.random() * max);
}

function randomChar() {
  return ALPHABET.charAt(randomNum(MAX));
}

function randomKey() {
  let key = '';
  for (let i = 0; i < 100; i++) {
    key += randomChar();
  }
  return key;
}