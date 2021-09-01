// eslint-disable-next-line no-unused-vars
function twoFerVA (name) {
  name = name ? name : 'you';
  return `One for ${name}, one for me.`;
}

// eslint-disable-next-line no-unused-vars
function twoFerVB (name) {
  return `One for ${name ? name : 'you'}, one for me.`;
}

// eslint-disable-next-line no-unused-vars
function twoFerVC (name) {
  return `One for ${name || 'you'}, one for me.`;
}

// eslint-disable-next-line no-unused-vars
function twoFerVD (name = 'you') {
  return `One for ${name}, one for me.`;
}

export const twoFer = twoFerVD;
