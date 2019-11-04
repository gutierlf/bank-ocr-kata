import {
  AccountNumber
} from '../src/account-number'
import { DIGIT_REFERENCES } from '../src/scanned-digit-reference'

describe('AccountNumber', () => {
  describe('#toString', () => {
    it('returns the string of each of the digits', () => {
      const accountNumber = buildAccountNumber('000000000')
      expect(accountNumber.toString()).toEqual('000000000')
    })
  })

  describe('#isValid', () => {
    it('uses the checksum to determine validity', () => {
      const accountNumber = buildAccountNumber('457508000')
      expect(accountNumber.isValid).toEqual(true)
    })
    it('is false when the checksum is invalid', () => {
      const accountNumber = buildAccountNumber('664371495')
      expect(accountNumber.isValid).toEqual(false)
    })
  })
})

const buildAccountNumber = (str) => {
  const digits = str.split('')
    .map(ch => DIGIT_REFERENCES.find(d => d.toString() === ch))
  return new AccountNumber(digits)
}
