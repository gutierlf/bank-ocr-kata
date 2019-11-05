import { parseAccountNumber } from '../src/bank-ocr'
import { AccountNumberPresenter } from '../src/account-number-presenter'

/* eslint-disable no-multi-str */
describe('parse and report', () => {
  it('reports good numbers', () => {
    const scanLines = '\
 _  _  _  _  _  _  _  _    \n\
| || || || || || || ||_   |\n\
|_||_||_||_||_||_||_| _|  |\n\
'.split('\n')
    const accountNumber = parseAccountNumber(scanLines)
    const presenter = new AccountNumberPresenter(accountNumber)
    expect(presenter.number).toEqual('000000051')
  })
  it('reports illegible numbers', () => {
    const scanLines = '\
    _  _  _  _  _  _     _ \n\
|_||_|| || ||_   |  |  | _ \n\
  | _||_||_||_|  |  |  | _|\n\
'.split('\n')
    const accountNumber = parseAccountNumber(scanLines)
    const presenter = new AccountNumberPresenter(accountNumber)
    expect(presenter.number).toEqual('49006771? ILL')
  })
  it('reports invalid numbers', () => {
    const scanLines = '\
    _  _     _  _  _  _  _ \n\
  | _| _||_| _ |_   ||_||_|\n\
  ||_  _|  | _||_|  ||_| _ \n\
'.split('\n')
    const accountNumber = parseAccountNumber(scanLines)
    const presenter = new AccountNumberPresenter(accountNumber)
    expect(presenter.number).toEqual('1234?678? ILL')
  })
})
/* eslint-enable no-multi-str */
