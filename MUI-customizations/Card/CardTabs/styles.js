// @flow
import { CARD_TAB_INDICATOR_HEIGHT, SPACING, WHITE } from '../../../constants'
import { type D2ThemedStyles } from '../../../themes/d2'
import { px } from '../../../utils/style'

const styles: D2ThemedStyles<*> = () => ({
  indicator: {
    height: px(CARD_TAB_INDICATOR_HEIGHT),
  },
  scrollButtons: {
    color: WHITE,
  },
  tabsRoot: {
    marginTop: px(-SPACING),
  },
})

export type Styles = typeof styles

export default styles
