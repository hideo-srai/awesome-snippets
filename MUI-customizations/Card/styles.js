// @flow
import { CONTENT_FONT_SIZE, DEFAULT_LINE_HEIGHT } from './constants'
import { type D2ThemedStyles } from '../../themes/d2'
import { DARK_GRAY, LIGHTER_GRAY, SPACING, SPACING_DOUBLE, SPACING_HALF, WHITE } from '../../constants'
import { px } from '../../utils/style'
import { screenXsMax } from '../../utils/breakpoints'
const styles: D2ThemedStyles<*> = ({
  fontNormalStyles,
}) => ({
  bottomButtons: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    [`@media (max-width: ${screenXsMax}px)`]: {
      flexDirection: 'column',
    },
    marginTop: px(SPACING_DOUBLE),
  },
  container: {
    backgroundColor: WHITE,
    boxShadow: '0 3px 3px 0 rgba(0,0,0,0.14), 0 3px 4px 0 rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.2)',
    height: 'auto',
    padding: `${px(SPACING_DOUBLE)} ${px(SPACING)}`,
  },
  content: {
    ...fontNormalStyles,
    color: DARK_GRAY,
    fontSize: px(CONTENT_FONT_SIZE),
    lineHeight: px(DEFAULT_LINE_HEIGHT),
  },
  horizontalLine: {
    color: LIGHTER_GRAY,
    marginBottom: px(SPACING),
    marginTop: px(SPACING_HALF),
  },
  noMarginBottom: {
    marginBottom: '0 !important',
  },
  topButtonWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    [`@media (max-width: ${screenXsMax}px)`]: {
      justifyContent: 'center',
    },
  },
})

export type Styles = typeof styles
export default styles
