export const capitalize = (string) => {
  if (!string) return "No hay str";

  return string.toUpperCase();
};

export const reverseString = (str) => {
  return str.split("").reverse().join("");
};
