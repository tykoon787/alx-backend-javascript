export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('(name) Invalid Type. Expected String');
    }

    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new Error('(code) Invalid Type. Expected String');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('(name) Invalid Type. Expected String');
    }
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new Error('(code) Invalid Type. Expected String');
    }
  }

  toString() {
    return `[object ${this._code}]`;
  }
}

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString());
