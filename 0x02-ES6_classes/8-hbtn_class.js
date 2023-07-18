export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new Error('(size) Invlaid Type. Expected Number');
    } else {
      this._size = size;
    }

    if (typeof location !== 'string') {
      throw new Error('(location) Invalid Type. Expected String');
    } else {
      this._location = location;
    }
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    if (typeof newSize !== 'number') {
      throw new Error('(size) Invlaid Type. Expected Number');
    } else {
      this._size = newSize;
    }
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    if (typeof newLocation !== 'string') {
      throw new Error('(location) Invalid Type. Expected String');
    } else {
      this._location = newLocation;
    }
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
