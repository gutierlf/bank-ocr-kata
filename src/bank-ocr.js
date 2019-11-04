import { DIGIT_REFERENCES, IllegibleScannedDigit } from './scanned-digit-reference'
import { AccountNumber } from './account-number'

export const parseDigit = (scan) => {
  const digit = DIGIT_REFERENCES.find(d => scan === d.scan)
  if (digit === undefined) {
    return new IllegibleScannedDigit(scan)
  }
  return digit
}

export const parseAccountNumber = (scanLines) => {
  function splitDigitScans () {
    const digitScans = []
    while (scanLines[0].length > 0) {
      digitScans.push(scanLines.reduce(
        (joined, current) => joined + current.slice(0, 3),
        ''
      ))
      scanLines = scanLines.map(l => l.slice(3))
    }
    return digitScans
  }

  const digits = splitDigitScans().map(s => parseDigit(s))
  return new AccountNumber(digits)
}
