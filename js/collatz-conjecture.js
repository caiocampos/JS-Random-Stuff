export const steps = (n) => {
  if (n <= 0) {
    throw Error('Only positive numbers are allowed');
  } else if (n === 1) {
    return 0;
  }
  let steps = 0;
  while (n !== 1) {
    n = (n & 1) === 0 ? n >> 1 : 3 * n + 1;
    steps++;
  }
  return steps;
};
