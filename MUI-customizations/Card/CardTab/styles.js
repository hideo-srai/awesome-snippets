// @flow
import { CARD_TAB_INDICATOR_HEIGHT, DISABLED, SPACING } from '../../../constants'
import { type D2ThemedStyles } from '../../../themes/d2'
import { FONT_SIZE_DEFAULT } from '../../../constants/fonts'
import { px } from '../../../utils/style'

const styles: D2ThemedStyles<*> = ({
  fontBoldStyles,
  fontNormalStyles,
}) => ({
  tabLabel: {
    ...fontNormalStyles,
    fontSize: px(FONT_SIZE_DEFAULT),
  },
  tabLabelContainer: {
    paddingBottom: px(SPACING),
    paddingTop: px(SPACING),
  },
  tabRoot: {
    borderBottom: `${px(CARD_TAB_INDICATOR_HEIGHT)} solid ${DISABLED}`,
    height: 'auto',
    maxWidth: 'initial',
    minWidth: 'auto',
    textTransform: 'none',
  },
  tabSelected: {
    ...fontBoldStyles,
  },
})

export type Styles = typeof styles

export default styles
