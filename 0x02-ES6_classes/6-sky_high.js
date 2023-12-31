import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors === 'number') {
      this._floors = floors;
    } else {
      throw new Error('(floors) Invalid Type. Expected Number');
    }
  }

  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    if (typeof newFloors === 'number') {
      this._floors = newFloors;
    } else {
      throw new Error('(floors) Invalid Type. Expected Number');
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
