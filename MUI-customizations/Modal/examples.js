// @flow

import {
  ModalHeading,
} from '../Typography'
import { withState } from 'recompose'
import Button from '../Button'
import Modal from './'
import React, { Fragment } from 'react'

// TODO: use higher order components to demonstrate how to integrate with redux

const DefaultExample: * = withState('pressed', 'onPressed', false)(
  ({ pressed, onPressed }) => (
    <Fragment>
      <Button
        onClick={() => onPressed(true)}
      >
        { 'Open My Modal' }
      </Button>
      { pressed
        ? <Modal
          footNote='I am the footnote around here!'
          heading={<ModalHeading>
            Modal Heading
          </ModalHeading>}
          onToggleClose={() => onPressed(false)}
        >
          { 'Modal Content' }
        </Modal>
        : null }
    </Fragment>
  )
)
// needed the Example suffix to avoid errors with duplicate definition
export const Default: *
  = <DefaultExample />
