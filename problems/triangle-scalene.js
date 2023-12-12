const Triangle = require("./triangle");
class TriangleScalene extends Triangle {
  isScalene() {
    return (
      this.side1 !== this.side2 &&
      this.side1 !== this.side3 &&
      this.side2 !== this.side3
    );
  }

  validate() {
    this.isValidScalene = this.isScalene();
  }
}

module.exports = TriangleScalene;
