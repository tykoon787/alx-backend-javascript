export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      // Check if method has been overidden
      if (this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }

    if (typeof sqft === 'number') {
      this._sqft = sqft;
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft === 'number') {
      this._sqft = newSqft;
    } else {
      throw new Error('Invalid Type. (sqft) should be of type Number');
    }
  }
}
