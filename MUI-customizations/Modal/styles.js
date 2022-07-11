// @flow
import { type D2ThemedStyles } from '../../themes/d2'
import { DARK_GRAY, MAX, SPACING, SPACING_DOUBLE, SPACING_HALF, WHITE } from '../../constants'
import { px } from '../../utils/style'

const styles: D2ThemedStyles<*> = ({
  fontLightStyles,
  fontNormalStyles,
}) => ({
  closeButton: {
    color: DARK_GRAY,
    cursor: 'pointer',
    fontSize: px(26),
    position: 'absolute',
    right: px(SPACING),
    top: px(SPACING_HALF),
  },
  content: {
    width: MAX,
  },
  footNote: {
    marginBottom: px(SPACING),
    padding: px(SPACING_DOUBLE),
    textAlign: 'center',
  },
  headingWrapper: {
    paddingTop: px(SPACING_DOUBLE),
    textAlign: 'center',
    width: MAX,
  },
  modalContainer: {
    backgroundColor: WHITE,
    boxShadow: '2px 6px 36px -3px rgba(0,0,0,0.4)',
    paddingBottom: px(SPACING_DOUBLE),
    paddingLeft: px(SPACING),
    paddingRight: px(SPACING),
    position: 'relative',
  },
  modalHeading: {
    ...fontNormalStyles,
    color: DARK_GRAY,
    fontSize: px(28),
    fontWeight: 600,
    letterSpacing: px(1),
    lineHeight: px(36),
    textAlign: 'center',
  },
  overlayInnerContent: {
    padding: px(SPACING_HALF),
  },
  subHeading: {
    ...fontLightStyles,
    color: DARK_GRAY,
    fontSize: px(16),
    lineHeight: px(20),
    marginBottom: px(SPACING),
    marginTop: px(SPACING),
    textAlign: 'center',
  },
})

export type Styles = typeof styles

export default styles
