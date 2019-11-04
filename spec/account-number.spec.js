import { buildAccountNumber } from './support/account-number.support'

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

  describe('#isLegible', () => {
    it('is true when all digits scanned correctly', () => {
      const accountNumber = buildAccountNumber('457508000')
      expect(accountNumber.isLegible).toEqual(true)
    })
    it('is false when some digits scanned incorrectly', () => {
      const accountNumber = buildAccountNumber('4575x8000')
      expect(accountNumber.isLegible).toEqual(false)
    })
  })
})
