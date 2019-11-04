import { ScannedDigitReference, DIGIT_REFERENCES } from '../src/scanned-digit-reference.js'
import { IllegibleScannedDigit } from '../src/scanned-digit-reference'

describe('ScannedDigitReference', () => {
  let zero
  beforeEach(() => {
    /* eslint-disable no-multi-str */
    const scan = '\
 _ \
| |\
|_|\
'
    /* eslint-enable no-multi-str */
    zero = new ScannedDigitReference(scan, 0)
  })

  describe('properties', () => {
    it('include the scanned characters', () => {
      expect(zero.scan).toEqual(' _ | ||_|')
    })
    it('include the digit', () => {
      expect(zero.digit).toEqual(0)
    })
  })
  describe('#toString', () => {
    it('returns the digit', () => {
      expect(zero.toString()).toEqual('0')
    })
  })
  describe('#isLegible', () => {
    it('returns true', () => {
      expect(zero.isLegible).toEqual(true)
    })
  })
})

describe('DIGIT_REFERENCES', () => {
  it('has all ten digits', () => {
    expect(DIGIT_REFERENCES.length).toEqual(10)
  })
})

describe('IllegibleScannedDigit', () => {
  let illegible
  beforeEach(() => {
    /* eslint-disable no-multi-str */
    const scan = '\
 _ \
| x\
|_|\
'
    /* eslint-enable no-multi-str */
    illegible = new IllegibleScannedDigit(scan)
  })

  describe('properties', () => {
    it('include the scanned characters', () => {
      expect(illegible.scan).toEqual(' _ | x|_|')
    })
  })
  describe('#toString', () => {
    it('returns the digit', () => {
      expect(illegible.toString()).toEqual('?')
    })
  })
  describe('#isLegible', () => {
    it('returns false', () => {
      expect(illegible.isLegible).toEqual(false)
    })
  })
})


