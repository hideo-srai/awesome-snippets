// @flow
import { Text } from '../Typography'
import { compose, withState } from 'recompose'
import Button from '../Button'
import DatePicker from '.'
import React, { Fragment } from 'react'
import moment from 'moment'

const DefaultExample: * = compose(
  withState('modalActive', 'setModalActive', false),
  withState('date', 'setDate', new Date('November 19, 2018 06:20:20')),
)(({
  date,
  modalActive,
  setDate,
  setModalActive,
}) => (
  <Fragment>
    <Text>
      { moment(date).format('LL') }
    </Text>
    { ' ' }
    <Button
      onClick={() => setModalActive(true)}
    >
      Pick Date
    </Button>
    { modalActive ? (
      <DatePicker
        onChange={setDate}
        onDismiss={() => setModalActive(false)}
        value={date}
      />
    ) : null }
  </Fragment>
))

export const Default: * = <DefaultExample />

const MinMaxDateExample: * = compose(
  withState('modalActive', 'setModalActive', false),
  withState('date', 'setDate', () => new Date('November 19, 2018 06:20:20')),
)(({
  date,
  modalActive,
  setDate,
  setModalActive,
}) => (
  <Fragment>
    <Button onClick={() => setModalActive(true)}>
      { `Pick Date - ${moment(date).format('LL')}` }
    </Button>
    { modalActive && (
      <DatePicker
        maxDate={moment().add(7, 'days')}
        minDate={moment().subtract(7, 'days')}
        onChange={setDate}
        onDismiss={() => setModalActive(false)}
        value={date}
      />
    ) }
  </Fragment>
))

export const MinMaxDate: * = <MinMaxDateExample />
