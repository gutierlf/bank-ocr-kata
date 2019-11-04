export class AccountNumber {
  constructor (digits) {
    this.digits = digits
  }
}

AccountNumber.prototype.toString = function AccountNumberToString () {
  return this.digits.join('')
}
