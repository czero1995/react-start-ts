export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

export const cleanObject = (object?: { [key: string]: unknown }) => {
  // Object.assign({}, object)
  if (!object) {
    return {};
  }
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};
