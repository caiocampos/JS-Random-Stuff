const MIN_LENGTH = 8;
const MAX_LENGTH = 15;

const SPECIAL_CONFIG = [
  { min: 33, max: 47 },
  { min: 58, max: 64 },
  { min: 91, max: 96 },
  { min: 123, max: 126 },
];

const MIN_DECIMAL = 48;
const MAX_DECIMAL = 57;

const MIN_UPPER = 65;
const MAX_UPPER = 90;

const MIN_LOWER = 97;
const MAX_LOWER = 122;

const randomInt = (max, min = 0) => {
  const maxValue = Math.floor(max);
  const minValue = Math.ceil(min);
  return Math.round(Math.random() * (maxValue - minValue)) + minValue;
};

const randomCharCodeInRange = (max, min) =>
  String.fromCharCode(randomInt(max, min));

const randomSpecialChar = () => {
  const index = randomInt(3);
  const { min, max } = SPECIAL_CONFIG[index];
  return randomCharCodeInRange(max, min);
};

const randomDecimalChar = () => randomCharCodeInRange(MAX_DECIMAL, MIN_DECIMAL);

const randomUpperChar = () => randomCharCodeInRange(MAX_UPPER, MIN_UPPER);

const randomLowerChar = () => randomCharCodeInRange(MAX_LOWER, MIN_LOWER);

const createArray = (length, mapFunction) =>
  Array.from(Array(length), (_v, i) => mapFunction(i));

export const generatePass = () => {
  const length = randomInt(MAX_LENGTH, MIN_LENGTH);
  let lower = false;
  let upper = false;
  let decimal = false;
  let special = false;
  let all = false;

  const getDecimal = () => {
    decimal = true;
    all = lower && upper && decimal && special;
    return randomDecimalChar();
  };
  const getLower = () => {
    lower = true;
    all = lower && upper && decimal && special;
    return randomLowerChar();
  };
  const getUpper = () => {
    upper = true;
    all = lower && upper && decimal && special;
    return randomUpperChar();
  };
  const getSpecial = () => {
    special = true;
    all = lower && upper && decimal && special;
    return randomSpecialChar();
  };

  return createArray(length, (i) => {
    if (!all && i >= length - 4) {
      if (!decimal) {
        return getDecimal();
      }
      if (!lower) {
        return getLower();
      }
      if (!upper) {
        return getUpper();
      }
      if (!special) {
        return getSpecial();
      }
    }
    switch (randomInt(10)) {
      case 2:
      case 6:
      case 9:
        return getDecimal();
      case 0:
      case 3:
      case 5:
        return getLower();
      case 1:
      case 8:
        return getUpper();
      default: // 4 & 7
        return getSpecial();
    }
  }).join("");
};
