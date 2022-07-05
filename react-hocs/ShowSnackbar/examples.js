// @flow
import { compose } from 'recompose'
import React, { type StatelessFunctionalComponent } from 'react'
import SnackbarNotification from '../../components/SnackbarNotification'
import showSnackbar, { type SnackbarProps } from './'

const simple: * = Object.freeze({
  message: 'This is an error notification',
  type: 'error',
})

const withHeading: * = Object.freeze({
  heading: 'Error!',
  message: 'This is an error notification',
  type: 'error',
})

const withHeadingAndDismiss: * = Object.freeze({
  hasDismiss: true,
  heading: 'Error!',
  message: 'This is an error notification',
  type: 'error',
})

const Success: * = Object.freeze({
  heading: 'Success!',
  message: 'This is a success notification',
  type: 'success',
})

const Info: * = Object.freeze({
  heading: 'Info!',
  message: 'This is an info notification',
  type: 'info',
})

const SnackbarExamplesComponent: StatelessFunctionalComponent<SnackbarProps> = (
  {
    hideSnackbar,
    showSnackbar,
  }: *
) => (<div>
  <button onClick={() => hideSnackbar()}>
    { 'Hide' }
  </button>
  <button onClick={() => showSnackbar(Success)}>
    { 'Success' }
  </button>
  <button onClick={() => showSnackbar(Info)}>
    { 'Info' }
  </button>
  <button onClick={() => showSnackbar(simple)}>
    { 'Error' }
  </button>
  <button onClick={() => showSnackbar(withHeading)}>
    { 'Error With Heading' }
  </button>
  <button onClick={() => showSnackbar(withHeadingAndDismiss)}>
    { 'Error With Heading and Dismiss button' }
  </button>
  <SnackbarNotification />
</div>)

const SnackbarExamplesHoc: * = compose(
  showSnackbar(),
)(SnackbarExamplesComponent)

export const SnackbarFeatures: *
  = <SnackbarExamplesHoc />

export default {
  navGroup: 'Higher Order Components',
}
