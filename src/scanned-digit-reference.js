export class ScannedDigitReference {
  constructor (scan, digit) {
    this.scan = scan
    this.digit = digit
    this.isLegible = true
  }
}

ScannedDigitReference.prototype.toString = function scannedDigitToString () {
  return this.digit.toString()
}

export class IllegibleScannedDigit {
  constructor (scan) {
    this.scan = scan
    this.isLegible = false
  }
}

IllegibleScannedDigit.prototype.toString = function illegibleScannedDigitToString () {
  return '?'
}

/* eslint-disable no-multi-str */
let scan, digit
scan = '\
 _ \
| |\
|_|\
'
digit = 0
const zero = new ScannedDigitReference(scan, digit)

scan = '\
   \
  |\
  |\
'
digit = 1
const one = new ScannedDigitReference(scan, digit)

scan = '\
 _ \
 _|\
|_ \
'
digit = 2
const two = new ScannedDigitReference(scan, digit)

scan = '\
 _ \
 _|\
 _|\
'
digit = 3
const three = new ScannedDigitReference(scan, digit)

scan = '\
   \
|_|\
  |\
'
digit = 4
const four = new ScannedDigitReference(scan, digit)

scan = '\
 _ \
|_ \
 _|\
'
digit = 5
const five = new ScannedDigitReference(scan, digit)

scan = '\
 _ \
|_ \
|_|\
'
digit = 6
const six = new ScannedDigitReference(scan, digit)

scan = '\
 _ \
  |\
  |\
'
digit = 7
const seven = new ScannedDigitReference(scan, digit)

scan = '\
 _ \
|_|\
|_|\
'
digit = 8
const eight = new ScannedDigitReference(scan, digit)

scan = '\
 _ \
|_|\
 _|\
'
digit = 9
const nine = new ScannedDigitReference(scan, digit)
/* eslint-enable no-multi-str */

export const DIGIT_REFERENCES = [
  zero, one, two, three, four, five, six, seven, eight, nine
]
