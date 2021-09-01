export const value = (resistors) => {
  return colorCode(resistors[0]) * 10 + colorCode(resistors[1]);
};

const colorCode = (color) => {
  return COLORS.indexOf(color);
};

const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];