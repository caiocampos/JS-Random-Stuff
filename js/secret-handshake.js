export const secretHandshake = (code) => {
  if (!Number.isInteger(code)) {
    throw new Error('Handshake must be a number');
  }
  let reverse = false;
  if (code > REVERSE_CODE) {
    reverse = true;
    code -= REVERSE_CODE;
  }
  const res = [];
  for (const secret of SECRETS) {
    if (code >= secret.code) {
      res[reverse ? 'push' : 'unshift'](secret.action);
      code -= secret.code;
    }
  }
  return res;
};

const REVERSE_CODE = 16;

const SECRETS = [
  { code: 8, action: 'jump' },
  { code: 4, action: 'close your eyes' },
  { code: 2, action: 'double blink' },
  { code: 1, action: 'wink' },
];