export const solve = (x, y) => {
  const r = Math.sqrt(x * x + y * y);
  return r <= 1 ? 10 : (r <= 5 ? 5 : (r <= 10 ? 1 : 0));
};
