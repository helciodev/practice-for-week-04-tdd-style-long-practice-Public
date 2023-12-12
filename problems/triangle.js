class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  hasValidSideLengths() {
    return this.side1 + this.side2 > this.side3;
  }

  validate() {
    if (this.hasValidSideLengths()) {
      this.isValid = true;
    }
  }

  static getValidTriangles(...args) {
    return args.filter((triangle) => triangle.hasValidSideLengths());
  }
}

module.exports = Triangle;
