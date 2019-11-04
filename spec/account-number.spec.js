import {
  AccountNumber
} from '../src/account-number'
import { DIGIT_REFERENCES } from '../src/scanned-digit-reference'

describe('AccountNumber', () => {
  describe('#toString', () => {
    it('returns the string of each of the digits', () => {
      const accountNumber = new AccountNumber(
        new Array(9).fill(DIGIT_REFERENCES[0])
      )
      expect(accountNumber.toString()).toEqual('000000000')
    })
  })
})
