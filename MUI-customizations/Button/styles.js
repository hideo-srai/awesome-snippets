// @flow
import {
  BLACK,
  DANGER,
  DANGER_ACTIVE,
  DANGER_HOVER,
  DEFAULT_LINE_HEIGHT,
  DISABLED,
  DISABLED_TEXT,
  HIGHLIGHT,
  HIGHLIGHT_ACTIVE,
  HIGHLIGHT_HOVER,
  LIGHT_BLUE,
  LINK_ACTIVE,
  LINK_HOVER,
  MAX,
  PRIMARY_FOCUS_BORDER,
  SECONDARY_FOCUS_BORDER,
  SPACING,
  SPACING_DOUBLE,
  SPACING_HALF,
  SPACING_QUARTER,
  SPACING_ZERO,
  SUCCESS,
  SUCCESS_ACTIVE,
  SUCCESS_HOVER,
  TERTIARY,
  TERTIARY_ACTIVE,
  TERTIARY_HOVER,
  WHITE,
} from '../../constants'
import { type D2ThemedStyles } from '../../themes/d2'
import {
  FONT_SIZE_DEFAULT,
  FONT_SIZE_LARGE,
  FONT_SIZE_SMALL,
} from '../../constants/fonts'
import { allLinkStates, em, px } from '../../utils/style'
import { screenXsMax } from '../../utils/breakpoints'

const MIN_BUTTON_LARGE_WIDTH: number = 120
const ICON_SMALL_PADDING: number = SPACING_ZERO
const BUTTON_BORDER: number = 2
const BUTTON_BORDER_SMALL: number = 1
const styles: D2ThemedStyles<*> = ({
  fontLightStyles,
}) => ({
  blank: {
    ...allLinkStates({
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      boxShadow: 'none',
    }),
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    margin: 0,
    minHeight: SPACING_ZERO,
    minWidth: SPACING_ZERO,
    padding: 0,
    textTransform: 'none',
  },
  block: {
    width: MAX,
  },
  button: {
    ...fontLightStyles,
    '& span > span:first-child': {
      paddingRight: px(SPACING_HALF),
    },
    '&:disabled': {
      backgroundColor: DISABLED,
      color: DISABLED_TEXT,
    },
    '&:visited': {
      color: WHITE,
    },
    border: `solid ${px(BUTTON_BORDER)} transparent`,
    borderRadius: SPACING_ZERO,
    boxShadow: 'none',
    color: WHITE,
    minHeight: SPACING_ZERO,
    minWidth: SPACING_ZERO,
    textAlign: 'center',
    textTransform: 'capitalize',
    [`@media (max-width: ${screenXsMax}px)`]: {
      marginLeft: SPACING_ZERO,
      width: MAX,
    },
    whiteSpace: 'nowrap',
  },
  danger: {
    '&:active': {
      backgroundColor: 'transparent',
      color: DANGER_ACTIVE,
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: DISABLED_TEXT,
    },
    '&:hover': {
      backgroundColor: 'transparent',
      color: DANGER_HOVER,
    },
    '&:visited': {
      backgroundColor: 'transparent',
      color: DANGER,
    },
    backgroundColor: 'transparent',
    color: DANGER,
  },
  default: {
    fontSize: px(FONT_SIZE_DEFAULT),
    padding: `${px(SPACING_HALF)} ${px(SPACING)}`,
  },
  ghost: {
    '&:disabled': {
      backgroundColor: 'transparent',
      border: `solid ${px(BUTTON_BORDER_SMALL)} ${DISABLED_TEXT}`,
      color: DISABLED_TEXT,
    },
    '&:hover': {
      backgroundColor: LIGHT_BLUE,
      color: WHITE,
    },
    '&:visited': {
      backgroundColor: 'transparent',
      border: `solid ${px(1)} ${LIGHT_BLUE}`,
      color: LIGHT_BLUE,
    },
    backgroundColor: 'transparent',
    border: `solid ${px(1)} ${LIGHT_BLUE}`,
    color: LIGHT_BLUE,
  },
  highlight: {
    '&:active': {
      color: HIGHLIGHT_ACTIVE,
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: DISABLED_TEXT,
    },
    '&:hover': {
      backgroundColor: 'transparent',
      color: HIGHLIGHT_HOVER,
    },
    '&:visited': {
      backgroundColor: 'transparent',
      color: HIGHLIGHT,
    },
    backgroundColor: 'transparent',
    color: HIGHLIGHT,
  },
  icon: {
    lineHeight: em(DEFAULT_LINE_HEIGHT),
    marginRight: px(SPACING_QUARTER),
  },
  iconNoSpacing: {
    marginRight: '0 !important',
    paddingRight: '0 !important',
  },
  large: {
    fontSize: px(FONT_SIZE_LARGE),
    minWidth: px(MIN_BUTTON_LARGE_WIDTH),
    padding: `${px(SPACING)} ${px(SPACING_DOUBLE)}`,
  },
  link: {
    '&:active': {
      color: LINK_ACTIVE,
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: DISABLED_TEXT,
    },
    '&:hover': {
      backgroundColor: 'transparent',
      color: LINK_HOVER,
    },
    '&:visited': {
      backgroundColor: 'transparent',
      color: LIGHT_BLUE,
    },
    backgroundColor: 'transparent',
    color: LIGHT_BLUE,
    padding: SPACING_ZERO,
  },
  linkBlack: {
    '&:active': {
      backgroundColor: 'transparent',
      color: BLACK,
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      color: DISABLED_TEXT,
    },
    '&:hover': {
      backgroundColor: 'transparent',
      color: BLACK,
    },
    '&:visited': {
      backgroundColor: 'transparent',
      color: BLACK,
    },
    backgroundColor: 'transparent',
    color: BLACK,
  },
  noBorder: {
    border: 'none',
  },
  onCard: {
    '& span span': {
      marginRight: SPACING_ZERO,
      paddingRight: SPACING_ZERO,
    },
    border: SPACING_ZERO,
    fontSize: FONT_SIZE_LARGE,
    margin: SPACING_ZERO,
    padding: SPACING_ZERO,
  },
  primary: {
    '&:focus': {
      border: `solid ${px(BUTTON_BORDER)} ${PRIMARY_FOCUS_BORDER}`,
      outlineOffset: SPACING_ZERO,
    },
  },
  secondary: {
    '&:focus': {
      border: `solid ${px(BUTTON_BORDER)} ${SECONDARY_FOCUS_BORDER}`,
      outlineOffset: SPACING_ZERO,
    },
  },
  small: {
    '& span > span:first-child': {
      paddingRight: px(ICON_SMALL_PADDING),
    },
    fontSize: px(FONT_SIZE_SMALL),
    padding: `${px(SPACING_QUARTER)} ${px(SPACING_HALF)}`,
  },
  success: {
    '&:active': {
      backgroundColor: SUCCESS_ACTIVE,
    },
    '&:focus': {
      border: `solid ${px(BUTTON_BORDER)} ${SUCCESS_HOVER}`,
      outlineOffset: SPACING_ZERO,
    },
    '&:hover': {
      backgroundColor: SUCCESS_HOVER,
    },
    backgroundColor: SUCCESS,
  },
  tertiary: {
    '&:active': {
      backgroundColor: TERTIARY_ACTIVE,
    },
    '&:focus': {
      border: `solid ${px(BUTTON_BORDER)} ${TERTIARY_HOVER}`,
      outlineOffset: SPACING_ZERO,
    },
    '&:hover': {
      backgroundColor: TERTIARY_HOVER,
    },
    backgroundColor: TERTIARY,
  },
})

export type Styles = typeof styles

export default styles
