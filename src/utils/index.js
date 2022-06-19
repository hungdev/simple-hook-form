
export const removeEmpty = (obj) => {
  return Object.keys(obj)
    .filter((k) => obj[k] !== undefined && obj[k] !== null && obj[k] !== '')
    .reduce((a, k) => ({ ...a, [k]: obj[k] }), {});
};

