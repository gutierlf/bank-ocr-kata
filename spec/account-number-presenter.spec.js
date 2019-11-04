import { AccountNumberPresenter } from '../src/account-number-presenter'
import { buildAccountNumber } from './support/account-number.support'

describe('AccountNumberPresenter', () => {
  describe('#number', () => {
    it('returns the string of each of the digits for valid numbers', () => {
      const accountNumber = buildAccountNumber('457508000')
      const presenter = new AccountNumberPresenter(accountNumber)
      expect(presenter.number).toEqual('457508000')
    })
    it('appends ERR for numbers that do not pass the checksum', () => {
      const accountNumber = buildAccountNumber('664371495')
      const presenter = new AccountNumberPresenter(accountNumber)
      expect(presenter.number).toEqual('664371495 ERR')
    })
    it('appends ILL for numbers that include illegible digits', () => {
      const accountNumber = buildAccountNumber('86110xx36')
      const presenter = new AccountNumberPresenter(accountNumber)
      expect(presenter.number).toEqual('86110??36 ILL')
    })
  })
})