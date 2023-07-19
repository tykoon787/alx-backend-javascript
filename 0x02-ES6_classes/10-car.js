export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand === 'string') {
      this._brand = brand;
    }

    if (typeof motor === 'string') {
      this._motor = motor;
    }

    if (typeof color === 'string') {
      this._color = color;
    }
  }


  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    if (typeof newBrand === 'string') {
      this._brand = newBrand;
    }
  }

  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    if (typeof newMotor === 'string') {
      this._motor = newMotor;
    }
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    if (typeof newColor === 'string') {
      this._color = newColor;
    }
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
