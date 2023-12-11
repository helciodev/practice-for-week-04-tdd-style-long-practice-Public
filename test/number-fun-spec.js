const { expect } = require("chai");

const { returnsThree, reciprocal } = require("../problems/number-fun");
describe("testing multiple functions", () => {
  describe("returnsThree()", () => {
    it("should return number three, 3", () => {
      expect(returnsThree()).to.equal(3);
    });
  });

  describe("reciprocal(num)", () => {
    describe("reciprocal(num) when argument is valid", () => {
      it("reciprocal(4) should return 0.25", () => {
        expect(reciprocal(4)).to.equal(0.25);
      });

      it("reciprocal(1) should return 1", () => {
        expect(reciprocal(1)).to.equal(1);
      });
      it("reciprocal(2) should return 0.5", () => {
        expect(reciprocal(2)).to.equal(0.5);
      });
      it("reciprocal(3) should return 0.3333333333333333", () => {
        expect(reciprocal(3)).to.equal(0.3333333333333333);
      });
      it("reciprocal(1000) should return 0.001", () => {
        expect(reciprocal(1000)).to.equal(0.001);
      });
    });

    describe("reciprocal(num) when argument is invalid", () => {
      it("reciprocal(0) should throw and error type RangeError", () => {
        expect(() => reciprocal(0)).to.throw(Error);
      });
      it("reciprocal(1001) should throw and error type RangeError", () => {
        expect(() => reciprocal(1001)).to.throw(Error);
      });
      it("reciprocal(-10) should throw and error type RangeError", () => {
        expect(() => reciprocal(-10)).to.throw(Error);
      });
      it("reciprocal('rice') should throw and error type TypeError", () => {
        expect(() => reciprocal("rice")).to.throw(Error);
      });
    });
  });
});
