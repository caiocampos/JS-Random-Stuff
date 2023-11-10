const testes = [
  "Testes123",
  "aBc134679",
  "123faldklfu",
  "12fa3ldklfu",
  "xyz135497",
  "mno976431",
  "654linked",
  "649onm137",
  "649fff137",
  "ksdfjh",
  "aBd1346@",
];

const forbiddenWords = ["teste"];

const getNextCharacter = (character, variation) => {
  const newCharacter = character.charCodeAt(0) + variation;
  if (
    // 0-9
    (newCharacter >= 48 && newCharacter <= 57) ||
    // a-z
    (newCharacter >= 97 && newCharacter <= 122)
  ) {
    return String.fromCharCode(newCharacter);
  }
  return undefined;
};

const testSequence = (string) => {
  if (string.length < 3) {
    return false;
  }
  const stringLowerCase = string.toLowerCase();
  for (let i = 0; i < stringLowerCase.length - 2; i++) {
    // Tests for repetitions
    if (
      stringLowerCase[i] === stringLowerCase[i + 1] &&
      stringLowerCase[i + 1] === stringLowerCase[i + 2]
    ) {
      return true;
    }
    // Tests for increasing sequences
    if (
      stringLowerCase[i + 1] === getNextCharacter(stringLowerCase[i], 1) &&
      stringLowerCase[i + 2] === getNextCharacter(stringLowerCase[i], 2)
    ) {
      return true;
    }
    // Tests for descending sequences
    if (
      stringLowerCase[i + 1] === getNextCharacter(stringLowerCase[i], -1) &&
      stringLowerCase[i + 2] === getNextCharacter(stringLowerCase[i], -2)
    ) {
      return true;
    }
  }
  return false;
};

const testPassword = (pass) => {
  const errors = [];
  if (pass.length < 8) {
    errors.push("the password must be at least 8 characters");
  }
  if (testSequence(pass.toLowerCase())) {
    errors.push("the password contains a sequence");
  }
  if (!/^(?=.*\d).*$/g.test(pass)) {
    errors.push("the password don't contains a number");
  }
  if (!/^(?=.*[a-z]).*$/g.test(pass)) {
    errors.push("the password don't contains a lowercase character");
  }
  if (!/^(?=.*[A-Z]).*$/g.test(pass)) {
    errors.push("the password don't contains a uppercase character");
  }
  if (!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/g.test(pass)) {
    errors.push("the password don't contains a special character");
  }
  for (const word of forbiddenWords) {
    if (pass.toLowerCase().includes(word)) {
      errors.push("the password contains a forbidden word");
      break;
    }
  }
  return errors;
};

const printErrors = (pass) => {
  const errors = testPassword(pass);

  if (errors.length > 0) {
    console.warn(`Errors for password "${pass}":`);
    errors.forEach((error) => console.warn(` -> ${error}`));
  } else {
    console.info(`The password "${pass}" is valid!`);
  }
};

testes.forEach(printErrors);
