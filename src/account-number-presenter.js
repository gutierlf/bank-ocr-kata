export class AccountNumberPresenter {
  constructor (accountNumber) {
    this.accountNumber = accountNumber
  }

  get number () {
    const number = this.accountNumber.toString()
    let suffix
    if (this.accountNumber.isValid) {
      suffix = ''
    } else {
      if (!this.accountNumber.isLegible) {
        suffix = 'ILL'
      } else {
        suffix = 'ERR'
      }
    }
    return [number, suffix].join(' ').trim()
  }
}
