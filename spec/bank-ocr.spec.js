import { parseAccountNumber, parseDigit } from '../src/bank-ocr'

/* eslint-disable no-multi-str */
describe('parseDigit', () => {
  it('parses zeros', () => {
    const scan = '\
 _ \
| |\
|_|\
'
    expect(parseDigit(scan).digit).toEqual(0)
  })
  it('parses ones', () => {
    const scan = '\
   \
  |\
  |\
'
    expect(parseDigit(scan).digit).toEqual(1)
  })
  it('parses two', () => {
    const scan = '\
 _ \
 _|\
|_ \
'
    expect(parseDigit(scan).digit).toEqual(2)
  })
  it('parses threes', () => {
    const scan = '\
 _ \
 _|\
 _|\
'
    expect(parseDigit(scan).digit).toEqual(3)
  })
  it('parses fours', () => {
    const scan = '\
   \
|_|\
  |\
'
    expect(parseDigit(scan).digit).toEqual(4)
  })
  it('parses fives', () => {
    const scan = '\
 _ \
|_ \
 _|\
'
    expect(parseDigit(scan).digit).toEqual(5)
  })
  it('parses sixes', () => {
    const scan = '\
 _ \
|_ \
|_|\
'
    expect(parseDigit(scan).digit).toEqual(6)
  })
  it('parses sevens', () => {
    const scan = '\
 _ \
  |\
  |\
'
    expect(parseDigit(scan).digit).toEqual(7)
  })
  it('parses eights', () => {
    const scan = '\
 _ \
|_|\
|_|\
'
    expect(parseDigit(scan).digit).toEqual(8)
  })
  it('parses nines', () => {
    const scan = '\
 _ \
|_|\
 _|\
'
    expect(parseDigit(scan).digit).toEqual(9)
  })
  it('returns an illegible number for bad scans', () => {
    const scan = '\
   \
   \
   \
'
    expect(parseDigit(scan).toString()).toEqual('?')
  })
})

describe('parseAccountNumber', () => {
  it('parses a whole account number across multiple lines', () => {
    const scanLines = '\
    _  _     _  _  _  _  _ \n\
  | _| _||_||_ |_   ||_||_|\n\
  ||_  _|  | _||_|  ||_| _|\n\
'.split('\n')
    const accountNumber = parseAccountNumber(scanLines)
    expect(accountNumber.toString()).toEqual('123456789')
  })
})
/* eslint-enable no-multi-str */
