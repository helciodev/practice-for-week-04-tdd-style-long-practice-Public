function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (typeof n !== "number")
    throw new Error(
      `TypeError, expected argument of type number instead got argument of type ${typeof n}`
    );

  if (n <= 0 || n > 1000)
    throw new Error(
      "RangeError, argument should be a number between 1 and 1000"
    );

  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal,
};
