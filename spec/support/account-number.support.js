import { DIGIT_REFERENCES, IllegibleScannedDigit } from '../../src/scanned-digit-reference'
import { AccountNumber } from '../../src/account-number'

export const buildAccountNumber = (str) => {
  const digits = str.split('')
    .map(ch => {
      const digit = DIGIT_REFERENCES.find(d => d.toString() === ch)
      if (digit === undefined) {
        return new IllegibleScannedDigit(ch)
      }
      return digit
    })
  return new AccountNumber(digits)
}
