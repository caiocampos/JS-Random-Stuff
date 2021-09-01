export const validate = (n) => {
  if (n < 10) {
    return true;
  }
  const sVal = n.toString();
  const len = sVal.length;
  let sum = 0;
  for (const c of sVal) {
    sum += Math.pow(Number(c), len);
  }
  return sum === n;
};
