import { parseAccountNumber, parseDigit } from '../src/bank-ocr'

/* eslint-disable no-multi-str */
describe('parseDigit', () => {
  it('parses zeros', () => {
    const scan = '\
 _ \
| |\
|_|\
'
    expect(parseDigit(scan).toString()).toEqual('0')
  })
  it('parses ones', () => {
    const scan = '\
   \
  |\
  |\
'
    expect(parseDigit(scan).toString()).toEqual('1')
  })
  it('parses two', () => {
    const scan = '\
 _ \
 _|\
|_ \
'
    expect(parseDigit(scan).toString()).toEqual('2')
  })
  it('parses threes', () => {
    const scan = '\
 _ \
 _|\
 _|\
'
    expect(parseDigit(scan).toString()).toEqual('3')
  })
  it('parses fours', () => {
    const scan = '\
   \
|_|\
  |\
'
    expect(parseDigit(scan).toString()).toEqual('4')
  })
  it('parses fives', () => {
    const scan = '\
 _ \
|_ \
 _|\
'
    expect(parseDigit(scan).toString()).toEqual('5')
  })
  it('parses sixes', () => {
    const scan = '\
 _ \
|_ \
|_|\
'
    expect(parseDigit(scan).toString()).toEqual('6')
  })
  it('parses sevens', () => {
    const scan = '\
 _ \
  |\
  |\
'
    expect(parseDigit(scan).toString()).toEqual('7')
  })
  it('parses eights', () => {
    const scan = '\
 _ \
|_|\
|_|\
'
    expect(parseDigit(scan).toString()).toEqual('8')
  })
  it('parses nines', () => {
    const scan = '\
 _ \
|_|\
 _|\
'
    expect(parseDigit(scan).toString()).toEqual('9')
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
  it('parses zeros', () => {
    const scanLines = '\
 _  _  _  _  _  _  _  _  _ \n\
| || || || || || || || || |\n\
|_||_||_||_||_||_||_||_||_|\n\
'
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('000000000')
  })
  it('parses ones', () => {
    const scanLines = '\
                           \n\
  |  |  |  |  |  |  |  |  |\n\
  |  |  |  |  |  |  |  |  |\n\
'
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('111111111')
  })
  it('parses twos', () => {
    const scanLines = '\
 _  _  _  _  _  _  _  _  _ \n\
 _| _| _| _| _| _| _| _| _|\n\
|_ |_ |_ |_ |_ |_ |_ |_ |_ \n\
'
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('222222222')
  })
  it('parses threes', () => {
    const scanLines = '\
 _  _  _  _  _  _  _  _  _ \n\
 _| _| _| _| _| _| _| _| _|\n\
 _| _| _| _| _| _| _| _| _|\n\
'
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('333333333')
  })
  it('parses fours', () => {
    const scanLines = '\
                           \n\
|_||_||_||_||_||_||_||_||_|\n\
  |  |  |  |  |  |  |  |  |\n\
'
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('444444444')
  })
  it('parses fives', () => {
    const scanLines = '\
 _  _  _  _  _  _  _  _  _ \n\
|_ |_ |_ |_ |_ |_ |_ |_ |_ \n\
 _| _| _| _| _| _| _| _| _|\n\
'
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('555555555')
  })
  it('parses sixes', () => {
    const scanLines = '\
 _  _  _  _  _  _  _  _  _ \n\
|_ |_ |_ |_ |_ |_ |_ |_ |_ \n\
|_||_||_||_||_||_||_||_||_|\n\
'
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('666666666')
  })
  it('parses sevens', () => {
    const scanLines = '\
 _  _  _  _  _  _  _  _  _ \n\
  |  |  |  |  |  |  |  |  |\n\
  |  |  |  |  |  |  |  |  |\n\
'
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('777777777')
  })
  it('parses eights', () => {
    const scanLines = '\
 _  _  _  _  _  _  _  _  _ \n\
|_||_||_||_||_||_||_||_||_|\n\
|_||_||_||_||_||_||_||_||_|\n\
'
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('888888888')
  })
  it('parses nines', () => {
    const scanLines = '\
 _  _  _  _  _  _  _  _  _ \n\
|_||_||_||_||_||_||_||_||_|\n\
 _| _| _| _| _| _| _| _| _|\n\
'
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('999999999')
  })
  it('parses mixed numbers', () => {
    const scanLines = '\
    _  _     _  _  _  _  _ \n\
  | _| _||_||_ |_   ||_||_|\n\
  ||_  _|  | _||_|  ||_| _|\n\
'
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('123456789')
  })
})
/* eslint-enable no-multi-str */
