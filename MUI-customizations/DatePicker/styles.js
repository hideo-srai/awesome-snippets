// @flow
import { type D2ThemedStyles } from '../../themes/d2'

const styles: D2ThemedStyles<*> = () => ({
  modalContents: {
    overflow: 'hidden',
  },
})

export type Styles = typeof styles
export default styles
