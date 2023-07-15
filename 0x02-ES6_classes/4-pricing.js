import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new Error('Invalid Type. Expected Number');
    }

    if (typeof currency === typeof Currency) {
      this._currency = currency;
    } else {
      throw new Error('Invalid Type. Expected Number');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (typeof newCurrency === typeof Currency) {
      this._currency = newCurrency;
    }
  }

  displayFullPrice() {
    return {
      _amount: this._amount,
      _currency: this._currency,
    };
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      const convertedPrice = amount * conversionRate;
      return convertedPrice;
    }
    return new Error('Invalid Type. Both Amount and conversionRate must be number');
  }
}
