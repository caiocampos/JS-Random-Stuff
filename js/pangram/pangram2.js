
const ALPHABET = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

export const isPangram = (sentence) => {
  if (sentence.length < 26) {
    return false;
  }
  sentence = sentence.toUpperCase();
  return !ALPHABET.some(c => sentence.indexOf(c) < 0)
};
