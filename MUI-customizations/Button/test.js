// @flow
import { start } from '../../testing'

describe('Button', () => {
  it('renders examples', () => start().examples())

  it('onClick works', () => start()
    .example('Default', { capture: false })
    .refuteHasTestID('Example-Button-Pressed')
    .press('Example-Button-Default')
    .assertHasTestID('Example-Button-Pressed')

  )
})
