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
const scans = [
  '\
 _ \
| |\
|_|\
',
  '\
   \
  |\
  |\
',
  '\
 _ \
 _|\
|_ \
',
  '\
 _ \
 _|\
 _|\
',
  '\
   \
|_|\
  |\
',
  '\
 _ \
|_ \
 _|\
',
  '\
 _ \
|_ \
|_|\
',
  '\
 _ \
  |\
  |\
',
  '\
 _ \
|_|\
|_|\
',
  '\
 _ \
|_|\
 _|\
'
  ]
/* eslint-enable no-multi-str */

export const DIGIT_REFERENCES = scans
  .map((s, i) => new ScannedDigitReference(s, i))
