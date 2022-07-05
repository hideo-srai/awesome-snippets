// @flow
import { type D2ThemedStyles } from '../../../themes/d2'
import { FAINT_GRAY, SPACING, SPACING_DOUBLE, SPACING_HALF, WHITE } from '../../../constants'
import { px } from '../../../utils/style'

const styles: D2ThemedStyles<*> = () => ({
  container: {
    alignItems: 'center',
    backgroundColor: WHITE,
    border: `${px(1)} solid ${FAINT_GRAY}`,
    boxShadow: `0 ${px(1)} ${px(3)} 0 rgba(239,239,239,0.5)`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: `${px(SPACING_DOUBLE)} ${px(SPACING)}`,
  },
  title: {
    padding: `0 0 ${px(SPACING_HALF)} 0`,
    textAlign: 'center',
  },
})

export type Styles = typeof styles

export default styles
