// @flow
/*

UrlQueryParam
--------------------

Provides a value and change props for a particular query string parameter.

*/

import { type HOC, compose, mapProps } from 'recompose'
import { connect } from 'react-redux'
import {
  isNumber,
  isString,
  omit,
} from 'lodash'
import { withRouter } from 'react-router-dom'
import qs from 'query-string'
import type { UrlQueryParamOptions, UrlQueryParamProps } from './types'

// the `:Object` in `TChildProps:Object` is a type constraint, not a default type.  Without it, Flow won't work with the props reducer
// eslint-disable-next-line flowtype/no-weak-types
export default function withUrlQueryParam<TChildProps: Object, TPassthruProps> (
  options: UrlQueryParamOptions<TChildProps>
): HOC<{| ...TPassthruProps, ...TChildProps |}, TPassthruProps> {
  return compose(
    // $FlowFixMe
    withRouter,
    // using location from redux instead of from withRouter works around an issue where mapProps does not re-run despite changing the url
    connect(({ router: { location } }) => ({
      location,
    }), null),
    mapProps(({ history, location, match, ...passthruProps }: *) => {
      const queryParams: * = qs.parse(location.search)
      const { [options.name]: value }: * = queryParams

      const props: UrlQueryParamProps = {
        onChange: (newValue: ?(string | number)) => {
          const newParams: * = isNumber(newValue) || isString(newValue) ? {
            ...queryParams,
            [options.name]: newValue,
          } : omit(queryParams, options.name)

          history.push({
            ...location,
            key: null,
            search: `?${qs.stringify(newParams)}`,
          })
        },
        value,
      }
      const childProps: TChildProps = options.props(props)
      return {
        ...childProps,
        ...passthruProps,
      }
    })
  )
}
