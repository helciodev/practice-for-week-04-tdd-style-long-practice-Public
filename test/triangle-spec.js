const { expect } = require("chai");

const Triangle = require("../problems/triangle");
const TriangleScalene = require("../problems/triangle-scalene");
const TriangleIsosceles = require("../problems/triangle-isosceles");

describe("Triangle class", () => {
  beforeEach(() => {
    triangle1 = new Triangle(4, 5, 4);
    triangle2 = new Triangle(1, 2, 5);
    triangle3 = new Triangle(5, 4, 2);
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

  describe("Triangle.getValidTriangles()", () => {
    it("should be a static method that when invoked in the parent class with an array of triangles instances returns only the valid triangles instances", () => {
      expect(
        Triangle.getValidTriangles(triangle1, triangle2, triangle3)
      ).to.have.length(2);
    });
  });

  describe("TriangleScalene", () => {
    beforeEach(() => {
      scalene = new TriangleScalene(3, 4, 2);
      falseScalene = new TriangleScalene(2, 3, 3);
    });

    it("should inherit from the Triangle class", () => {
      expect(scalene).to.be.instanceOf(Triangle);
    });
    describe("TriangleScalene.isScalene()", () => {
      it("should return true or false if the triangle instance of TriangleScalene is scalene", () => {
        expect(scalene.isScalene()).to.equal(true);
        expect(falseScalene.isScalene()).to.equal(false);
      });
    });

    describe("TriangleScalene.validate()", () => {
      beforeEach(() => {
        scalene.validate();
        falseScalene.validate();
      });

      it("should add a isValidScalene with the value true if the triangle instance of TriangleScalene is a valid scalene triangle", () => {
        expect(scalene.isValidScalene).to.equal(true);
        expect(falseScalene.isValidScalene).to.equal(false);
      });
    });
  });
  describe("TriangleIsosceles", () => {
    beforeEach(() => {
      scalene = new TriangleScalene(3, 4, 2);
      isosceles = new TriangleIsosceles(2, 3, 3);
    });

    it("should inherit from the Triangle class", () => {
      expect(isosceles).to.be.instanceOf(Triangle);
      expect;
    });
    describe("TriangleIsosceles.isIsosceles()", () => {
      it("should return true or false if the triangle instance of TriangleIsosceles is isosceles", () => {
        expect(isosceles.isIsosceles()).to.equal(true);
      });
    });

    describe("TriangleIsosceles.validate()", () => {
      beforeEach(() => {
        scalene.validate();
        isosceles.validate();
      });

      it("should add a isValidIsosceles with the value true if the triangle instance of TriangleIsosceles is a valid isosceles triangle", () => {
        expect(scalene.isValidIsosceles).to.equal(undefined);
        expect(isosceles.isValidIsosceles).to.equal(true);
      });
    });
  });
});
