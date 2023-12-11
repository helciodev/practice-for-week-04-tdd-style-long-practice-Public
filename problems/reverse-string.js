module.exports = function reverseString(string) {
  if (typeof string !== "string")
    throw new Error(
      `Expected argument of type string, got argument of ${typeof string}`
    );
  return string.split("").reverse().join("");
};
