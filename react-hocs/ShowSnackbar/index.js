// @flow
/*

ShowSnackbar
--------------------

Provides a showSnackbar prop to components to show a snackbar notification.  Easier than the default approach that uses redux.

*/

import { type HOC } from 'recompose'
import { connect } from 'react-redux'
import { hideSnackbar as hideSnackbarAction, showSnackbar as showSnackbarAction } from '../../actions'
import type { MapDispatchToProps } from '../../actions'
import type { PayloadExact as SnackbarPayloadExact } from '../../reducers/Snackbar'

export type SnackbarProps = {|
  hideSnackbar: () => void,
  showSnackbar: (SnackbarPayloadExact) => void,
|}

const mapDispatchToProps: MapDispatchToProps<SnackbarProps> = (dispatch) => ({
  hideSnackbar: () => {
    dispatch(hideSnackbarAction())
  },
  showSnackbar: (props: SnackbarPayloadExact) => {
    dispatch(showSnackbarAction(props))
  },
})

export default function showSnackbar<TPassthruProps> (
): HOC<TPassthruProps, {| ...TPassthruProps, ...SnackbarProps |}> {
  return connect(null, mapDispatchToProps)
}
