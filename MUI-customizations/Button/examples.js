// @flow
import { Text } from '../Typography'
import { withState } from 'recompose'
import Button from './'
import Example from '../Example'
import FaIcon from '../FontAwesome'
import React, { Fragment } from 'react'

// so onClick can be tested
const DefaultExample: * = withState('pressed', 'onPressed', false)(
  ({ pressed, onPressed }) => (
    <Fragment>
      <Button
        data-test-id='Example-Button-Default'
        onClick={() => onPressed(true)}
      >
        { 'Hi Dan' }
      </Button>
      { pressed ? <Text data-test-id='Example-Button-Pressed'>
You Pressed It
      </Text> : null }
    </Fragment>
  )
)

export const Default: * = <DefaultExample />

export const Secondary: * = (
  <Example container='checkered'>
    <Button secondary>
      { 'Hi Dan' }
    </Button>
  </Example>
)

export const SecondaryWithIconString: * = (
  <Button
    icon='star'
    secondary
  >
    { 'Hi Icon Button' }
  </Button>)

export const SecondaryWithIconNode: * = (
  <Button
    icon={<FaIcon
      icon='headphones'
      weight='solid'
    />}
    secondary
  >
    { 'Hi Icon Button 2' }
  </Button>)

export const SecondaryWithIconFunction: * = (
  <Button
    icon={() => (<FaIcon
      icon='red-river'
      weight='brand'
    />)}
    secondary
  >
    { 'Hi Icon Button 3' }
  </Button>)

export const LinkWithIcon: * = (
  <Button
    icon='user-circle'
    link
  >
    { 'Click Me' }
  </Button>
)

export const BlankButtonWithIcon: * = (
  <Button
    blank
  >
    <FaIcon
      icon='edit'
      weight='regular'
    />
  </Button>
)

export const BlankButtonWithText: * = (
  <Button
    blank
  >
    { 'Some Text' }
  </Button>
)

export const LinkBlackText: * = (
  <Button
    linkBlack
  >
    { 'Some Text' }
  </Button>
)

export const PrimaryDisabled: * = (
  <Button
    disabled
    linkBlack
  >
    { 'Some Text' }
  </Button>
)
