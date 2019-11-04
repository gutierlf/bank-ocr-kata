import { parseAccountNumber, parseDigit } from '../src/bank-ocr'

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
})

describe('parseAccountNumber', () => {
  it('parses zeros', () => {
    /* eslint-disable no-multi-str */
    const scanLines = '\
 _  _  _  _  _  _  _  _  _ \n\
| || || || || || || || || |\n\
|_||_||_||_||_||_||_||_||_|\n\
'
    /* eslint-enable no-multi-str */
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('000000000')
  })
  it('parses ones', () => {
    /* eslint-disable no-multi-str */
    const scanLines = '\
                           \n\
  |  |  |  |  |  |  |  |  |\n\
  |  |  |  |  |  |  |  |  |\n\
'
    /* eslint-enable no-multi-str */
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('111111111')
  })
  it('parses twos', () => {
    /* eslint-disable no-multi-str */
    const scanLines = '\
 _  _  _  _  _  _  _  _  _ \n\
 _| _| _| _| _| _| _| _| _|\n\
|_ |_ |_ |_ |_ |_ |_ |_ |_ \n\
'
    /* eslint-enable no-multi-str */
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('222222222')
  })
  it('parses threes', () => {
    /* eslint-disable no-multi-str */
    const scanLines = '\
 _  _  _  _  _  _  _  _  _ \n\
 _| _| _| _| _| _| _| _| _|\n\
 _| _| _| _| _| _| _| _| _|\n\
'
    /* eslint-enable no-multi-str */
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('333333333')
  })
  it('parses fours', () => {
    /* eslint-disable no-multi-str */
    const scanLines = '\
                           \n\
|_||_||_||_||_||_||_||_||_|\n\
  |  |  |  |  |  |  |  |  |\n\
'
    /* eslint-enable no-multi-str */
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('444444444')
  })
  it('parses fives', () => {
    /* eslint-disable no-multi-str */
    const scanLines = '\
 _  _  _  _  _  _  _  _  _ \n\
|_ |_ |_ |_ |_ |_ |_ |_ |_ \n\
 _| _| _| _| _| _| _| _| _|\n\
'
    /* eslint-enable no-multi-str */
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('555555555')
  })
  it('parses sixes', () => {
    /* eslint-disable no-multi-str */
    const scanLines = '\
 _  _  _  _  _  _  _  _  _ \n\
|_ |_ |_ |_ |_ |_ |_ |_ |_ \n\
|_||_||_||_||_||_||_||_||_|\n\
'
    /* eslint-enable no-multi-str */
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('666666666')
  })
  it('parses sevens', () => {
    /* eslint-disable no-multi-str */
    const scanLines = '\
 _  _  _  _  _  _  _  _  _ \n\
  |  |  |  |  |  |  |  |  |\n\
  |  |  |  |  |  |  |  |  |\n\
'
    /* eslint-enable no-multi-str */
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('777777777')
  })
  it('parses eights', () => {
    /* eslint-disable no-multi-str */
    const scanLines = '\
 _  _  _  _  _  _  _  _  _ \n\
|_||_||_||_||_||_||_||_||_|\n\
|_||_||_||_||_||_||_||_||_|\n\
'
    /* eslint-enable no-multi-str */
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('888888888')
  })
  it('parses nines', () => {
    /* eslint-disable no-multi-str */
    const scanLines = '\
 _  _  _  _  _  _  _  _  _ \n\
|_||_||_||_||_||_||_||_||_|\n\
 _| _| _| _| _| _| _| _| _|\n\
'
    /* eslint-enable no-multi-str */
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('999999999')
  })
  it('parses mixed numbers', () => {
    /* eslint-disable no-multi-str */
    const scanLines = '\
    _  _     _  _  _  _  _ \n\
  | _| _||_||_ |_   ||_||_|\n\
  ||_  _|  | _||_|  ||_| _|\n\
'
    /* eslint-enable no-multi-str */
    const accountNumber = parseAccountNumber(scanLines.split('\n'))
    expect(accountNumber.toString()).toEqual('123456789')
  })
})



