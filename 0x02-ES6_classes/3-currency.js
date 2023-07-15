export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new Error('Invalid Type. Expected String');
    }

    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Invalid Type. Expected String');
    }
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new Error('Invalid Type. Expected String');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Invalid Type. Expected String');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
