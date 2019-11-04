import { ScannedDigitReference } from '../src/scanned-digit-reference.js'
import { DIGIT_REFERENCES } from '../src/scanned-digit-reference'

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
})

describe('DIGIT_REFERENCES', () => {
  it('has all ten digits', () => {
    expect(DIGIT_REFERENCES.length).toEqual(10)
  })
})
