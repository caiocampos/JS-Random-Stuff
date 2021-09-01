export const reverseString = (input) => {
  let res = '';
  for (let i = input.length; i >= 0; i--) {
    res += input.charAt(i);
  }
  return res;
};
