const { expect } = require("chai");

const Triangle = require("../problems/triangle");

describe("Triangle class", () => {
  beforeEach(() => {
    triangle = new Triangle(4, 5, 4);
  });
  it("should have three sides as keys when initiated", () => {
    expect(triangle).to.have.keys("side1", "side2", "side3");
  });

  describe("Triangle.getPerimeter()", () => {
    it("return the sum of the triangle instance 3 sides when invoked", () => {
      expect(triangle.getPerimeter()).to.equal(13);
    });
  });
});
