// @flow
import { start } from '../../testing'

describe('withUrlQueryParam', () => {
  it('renders examples', () => start().examples())

  it('pressing button in group adds a query string param', () => start()
    .example('Simple', { capture: false })
    .press('test1-9')
    .assertUrlQueryParam('test1_range', '9')
  )

  it('pressing reset button clears the query string param', () => start()
    .example('Simple', { capture: false })
    .press('test1-12')
    .assertUrlQueryParam('test1_range', '12')
    .press('test1-reset')
    .refuteUrlQueryParam('test1_range')
  )
})
