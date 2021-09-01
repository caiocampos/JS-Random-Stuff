export const convert = (n) => {
  const [pling, plang, plong] = [n % 3 == 0, n % 5 == 0, n % 7 == 0];
  if (!(pling || plang || plong)) {
    return String(n);
  }
  return (pling ? 'Pling' : '') + (plang ? 'Plang' : '') + (plong ? 'Plong' : '');
};
