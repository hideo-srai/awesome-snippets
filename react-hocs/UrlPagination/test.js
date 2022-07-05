// @flow
import { start } from '../../testing'

describe('withPagination', () => {
  it('renders examples', () => start().examples())

  it('default example', () => start()
    .example('Advanced', { capture: false })
    .press('page-change-button')
    .assertUrlQueryParam('advancedTable_page', '2')
  )
})
