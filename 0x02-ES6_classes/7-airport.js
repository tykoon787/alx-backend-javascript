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

  toString() {
    return this._code;
  }
}
