import { DIGIT_REFERENCES } from './scanned-digit-reference'
import { AccountNumber } from './account-number'

export const parseDigit = (scan) => {
  return DIGIT_REFERENCES.find(d => scan === d.scan)
}

export const parseAccountNumber = (scanLines) => {
  const digits = []
  while (scanLines[0].length > 0) {
    const digitScan = scanLines.reduce(
      (joined, current) => joined + current.slice(0, 3),
      ''
    )
    scanLines = scanLines.map(l => l.slice(3))
    digits.push(parseDigit(digitScan))
  }
  return new AccountNumber(digits)
}
