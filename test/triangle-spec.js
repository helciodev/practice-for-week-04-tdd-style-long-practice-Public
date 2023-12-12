const { expect } = require("chai");

const Triangle = require("../problems/triangle");

describe("Triangle class", () => {
  beforeEach(() => {
    triangle1 = new Triangle(4, 5, 4);
    triangle2 = new Triangle(1, 2, 5);
  });
  it("should have three sides as keys when initiated", () => {
    expect(triangle1).to.have.keys("side1", "side2", "side3");
  });

  describe("Triangle.getPerimeter()", () => {
    it("return the sum of the triangle instance 3 sides when invoked", () => {
      expect(triangle1.getPerimeter()).to.equal(13);
    });
  });
  describe("Triangle.hasValidSideLengths()", () => {
    it("returns a boolean true if the 3 sides are a valid and false boolean if not", () => {
      expect(triangle1.hasValidSideLengths()).equal(true);
      expect(triangle2.hasValidSideLengths()).equal(false);
    });
  });

  describe("Triangle.validate()", () => {
    beforeEach(() => {
      triangle1.validate();
      triangle2.validate();
    });
    it("should add a isValid property  with a value to the triangle instance if it is a valid triangle", () => {
      expect(triangle1.isValid).to.exist;
      expect(triangle2.isValid).to.not.exist;
    });
  });
});
