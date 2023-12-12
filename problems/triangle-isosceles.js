const Triangle = require("./triangle");

class TriangleIsosceles extends Triangle {
  isIsosceles() {
    return (
      this.side1 === this.side2 ||
      this.side1 === this.side3 ||
      this.side2 === this.side3
    );
  }
  validate() {
    this.isValidIsosceles = this.isIsosceles();
  }
}

module.exports = TriangleIsosceles;
