export const compute = (left, right) => {
  if (left === right) {
    return 0;
  }
  if (!left) {
    throw new Error('left strand must not be empty');
  }
  if (!right) {
    throw new Error('right strand must not be empty');
  }
  if (left.length !== right.length) {
    throw new Error('left and right strands must be of equal length');
  }
  let count = 0;
  for (let i = 0; i < left.length; i++) {
    if (left.charAt(i) !== right.charAt(i)) {
      count++;
    }
  }
  return count;
};
