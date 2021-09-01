const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const isPangram = (sentence) => {
  if (sentence.length < 26) {
    return false;
  }
  sentence = sentence.toUpperCase();
  for (const c of ALPHABET) {
    if (sentence.indexOf(c) < 0) {
      return false;
    } 
  }
  return true;
};
