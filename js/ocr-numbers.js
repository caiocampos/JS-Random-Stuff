export const convert = (s) => {
  let [res, lines, el] = [[], s.split('\n')];
  while ((el = lines.slice(0, 4)).length) {
    res.push(convertNumbers(el));
    lines = lines.slice(4);
  }
  return res.join(',');
};

function convertNumbers(lines) {
  let res = '';
  let [l1, l2, l3] = lines;
  while (l1.slice(0, 3).length) {
    res += convertNumber([l1.slice(0, 3), l2.slice(0, 3), l3.slice(0, 3)]);
    [l1, l2, l3] = [l1.slice(3), l2.slice(3), l3.slice(3)];
  }
  return res;
}

function convertNumber(lines) {
  const res = NUMBERS.findIndex(el => el[0] === lines[0] && el[1] === lines[1] && el[2] === lines[2]);
  return res >= 0 ? String(res) : '?';
}

const NUMBERS = [
  [
    ' _ ',
    '| |',
    '|_|'
  ], [
    '   ',
    '  |',
    '  |'
  ], [
    ' _ ',
    ' _|',
    '|_ '
  ], [
    ' _ ',
    ' _|',
    ' _|'
  ], [
    '   ',
    '|_|',
    '  |'
  ], [
    ' _ ',
    '|_ ',
    ' _|'
  ], [
    ' _ ',
    '|_ ',
    '|_|'
  ], [
    ' _ ',
    '  |',
    '  |'
  ], [
    ' _ ',
    '|_|',
    '|_|'
  ], [
    ' _ ',
    '|_|',
    ' _|'
  ]
];