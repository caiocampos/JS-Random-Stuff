export const transform = (old) => {
  const res = {};
  for (const key of Object.keys(old)) {
    for (const val of old[key]) {
      res[String(val).toLowerCase()] = Number(key);
    }
  }
  return res;
};
