// src/utils/checkDomain.js
export const checkDomain = (query) => {
  const tlds = [".com", ".net", ".ai", ".xyz"];
  return tlds.map(ext => ({
    name: `${query}${ext}`,
    available: Math.random() > 0.5
  }));
};
