// @flow
import { Text } from '../../components/Typography'
import { compose } from 'recompose'
import {
  includes,
  isNumber,
  isString,
} from 'lodash'
import Button from '../../components/Button'
import ButtonGroup from '../../components/ButtonGroup'
import Example from '../../components/Example'
import React, { Fragment } from 'react'
import withUrlQueryParam from './'

/*
Simplest
*/

type Props1 = {|
  handleChangeRange: (?string) => void,
  range: ?string,
|}

const BasicTest: React$ComponentType<Props1> = ({ range, handleChangeRange }: *) => (
  <Fragment>
    <ButtonGroup
      items={[{ testID: 'test1-6', text: '6 Months', value: '6' }, { testID: 'test1-9', text: '9 Months', value: '9' }, { testID: 'test1-12', text: '12 Months', value: '12' }]}
      onValueChange={(value: *) => {
        if (isString(value)) {
          handleChangeRange(value)
        }
      }}
      value={range}
    />
    <Button
      data-test-id='test1-reset'
      onClick={() => handleChangeRange()}
    >
      <Text>
Click To Reset
      </Text>
    </Button>
  </Fragment>
)

const BasicTestWithHoc: * = compose(
  withUrlQueryParam({
    name: 'test1_range',
    props: ({ value, onChange }) => ({
      handleChangeRange: onChange,
      range: value,
    }),
  })
)(BasicTest)

export const Simple: * = (<Example
  container='none'
  details={'In this example, \'test1_range\' is the query string parameter.  Click one of the buttons and see how it works.  The last button clears the value, resulting in no button selected.  Also try changing the value by hand.  Change it to an invalid value and notice that no button is selected.'}
>
  <BasicTestWithHoc />
</Example>
)

/*
With Validation
*/

type Props2 = {|
  handleChangeRange: (?string) => void,
  range: string,
|}

const TestWithValidation: React$ComponentType<Props2> = ({ range, handleChangeRange }: *) => (
  <Fragment>
    <ButtonGroup
      items={[{ text: '6 Months', value: '6' }, { text: '9 Months', value: '9' }, { text: '12 Months', value: '12' }]}
      onValueChange={(value: *) => {
        if (isString(value)) {
          handleChangeRange(value)
        }
      }}
      value={range}
    />
    <Button onClick={() => handleChangeRange()}>
      <Text>
Click To Reset
      </Text>
    </Button>
  </Fragment>
)

const TestWithValidationWithHoc: * = compose(
  withUrlQueryParam({
    name: 'test2_range',
    props: ({ value, onChange }): Props2 => ({
      handleChangeRange: onChange,
      range: includes(['6', '9', '12'], value) ? value : '6', // this ugly but compact check ensures the value is one of 3 values, with
    }),
  })
)(TestWithValidation)

export const WithValidation: * = (<Example
  container='none'
  details={'This example ensures a valid value for the \'test2_range\' '}
>
  <TestWithValidationWithHoc />
</Example>
)

/*
With Validation and Type Conversion
*/

type Props3 = {|
  handleChangeRange: (number) => void,
  range: number,
|}

const TestWithTypeConversion: React$ComponentType<Props3> = ({ range, handleChangeRange }: *) => (
  <Fragment>
    <ButtonGroup
      items={[{ text: '6 Months', value: 6 }, { text: '9 Months', value: 9 }, { text: '12 Months', value: 12 }]}
      onValueChange={(value: *) => {
        if (isNumber(value)) {
          handleChangeRange(value)
        }
      }}
      value={range}
    />
  </Fragment>
)

const TestWithTypeConversionWithHoc: * = compose(
  withUrlQueryParam({
    name: 'test3_range',
    props: ({ value, onChange }): Props3 => ({
      handleChangeRange: onChange,
      range: includes([6, 9, 12], parseInt(value, 10)) ? parseInt(value, 10) : 6, // this ugly but compact check ensures the value is one of 3 values, with
    }),
  })
)(TestWithTypeConversion)

export const WithTypeConversion: * = (<Example
  container='none'
  details={'This example ensures a valid value for the \'test3_range\', and also converts it from a string to a number in the props() option so the render function has the right type.'}
>
  <TestWithTypeConversionWithHoc />
</Example>
)

export default {
  navGroup: 'Higher Order Components',
}
