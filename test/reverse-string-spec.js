const { expect } = require("chai");
const reverseString = require("../problems/reverse-string");

describe("reverseString()", () => {
  it("should return 'nuf' if the argument provided is 'fun'", () => {
    expect(reverseString("fun")).to.equal("nuf");
  });

  it("should throw an error of TypeError if argument is not a string", () => {
    expect(() => reverseString(2)).to.throw(Error);
  });
});
