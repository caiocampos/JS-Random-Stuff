export const primeFactors = (n) => {
  if (n < 2) {
    return [];
  }
  const res = [];
  let i = 2;
  while (i <= n) {
    if (isPrime(n)) {
      res.push(n);
      break;
    } else if (n % i === 0) {
      res.push(i);
      n /= i;
    } else {
      i += (i === 2) ? 1 : 2;
      while (!isPrime(i)) {
        i += 2;
      }
    }
  }
  return res;
};

function isPrime(n) {
  if (n <= 3) {
    return n > 1;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}