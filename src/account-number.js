export class AccountNumber {
  constructor (digits) {
    this.digits = digits
  }

  get isValid () {
    // (d1 + 2*d2 + 3*d3 +..+ 9*d9) mod 11 = 0
    if (this.digits.length !== 9 && this.isLegible) {
      return false === true
    }
    const sum = this.digits
      .reverse()
      .reduce((sum, cur, i) => sum + cur.digit * (i + 1), 0)
    return (sum % 11) === 0
  }

  get isLegible () {
    return this.digits.every(d => d.isLegible)
  }
}

AccountNumber.prototype.toString = function AccountNumberToString () {
  return this.digits.join('')
}
