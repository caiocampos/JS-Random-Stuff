const EARTH = 31557600;
const YEAR = {
  earth: EARTH,
  mercury: EARTH * 0.2408467,
  venus: EARTH * 0.61519726,
  mars: EARTH * 1.8808158,
  jupiter: EARTH * 11.862615,
  saturn: EARTH * 29.447498,
  uranus: EARTH * 84.016846,
  neptune: EARTH * 164.79132
};

export const age = (planet, time) => {
  return Number((time / YEAR[planet]).toFixed(2));
};
