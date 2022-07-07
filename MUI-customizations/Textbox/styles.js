// @flow
import { type D2ThemedStyles } from '../../themes/d2'
import { DANGER, DARK_GRAY, LIGHT_GRAY, PRIMARY } from '../../constants'
import { allLinkStates, beforeAfterStyles, px } from '../../utils/style'

const styles: D2ThemedStyles<*> = (theme) => ({
  error: {
    '&$root': {
      color: DANGER,
    },
  },
  focused: {
    '&$root': {
      color: PRIMARY,
    },
  },
  root: {},
})

export const labelStyles: (*) => * = () => ({
  root: {
    color: DARK_GRAY,
  },
})

export const helperTextStyles: (*) => * = () => ({
  root: {
    color: LIGHT_GRAY,
  },
})

export const inputStyles: (*) => * = () => ({
  root: {
    ...allLinkStates({
      ...beforeAfterStyles({
        borderBottomWidth: `${px(1)} !important`,
      }),
    }),
  },
  underline: {
    '&:after': {
      borderBottomColor: PRIMARY,
    },
  },
})

export type Styles = typeof styles

export default styles
