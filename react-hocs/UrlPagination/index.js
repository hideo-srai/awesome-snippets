// @flow
/*

UrlPagination
--------------------

Provides props for paging and sorting using URL query string parameters to store the values.

*/

import { PAGE_SIZE } from '../../constants'
import { compose, mapProps } from 'recompose'
import { connect } from 'react-redux'
import { isNaN, mapKeys, max } from 'lodash'
import { withRouter } from 'react-router-dom'
import qs from 'query-string'
import type { PaginationOptions, PaginationProps, SortDirection } from './types'

const DEFAULT_SORT_DIRECTION: SortDirection = 'asc'

// the `:Object` in `TChildProps:Object` is a type constraint, not a default type.  Without it, Flow won't work with the props reducer
// eslint-disable-next-line flowtype/no-weak-types
export default function withPagination<TPassthruProps, TChildProps: Object> (
  options?: PaginationOptions<TChildProps> = Object.freeze({})
): (React$ComponentType<{| ...TPassthruProps, ...TChildProps |}>) => React$ComponentType<TPassthruProps> {
  const getUrlQueryParamKey: (string) => string = (key) => options.paramPrefix ? `${options.paramPrefix}_${key}` : key

  return compose(
    // $FlowFixMe
    withRouter,
    // using location from redux instead of from withRouter works around an issue where mapProps does not re-run despite changing the url
    connect(({ router: { location } }) => ({
      location,
    }), null),
    mapProps(({ history, location, match, ...passthruProps }: *) => {
      const queryParams: * = qs.parse(location.search)
      const getUrlQueryParamIntValue: (string, number) => number = (key, defaultValue) => {
        const { [getUrlQueryParamKey(key)]: value }: * = queryParams
        if (!value) return defaultValue
        const parsed: number = parseInt(value, 10)
        return isNaN(parsed) ? defaultValue : parsed
      }

      const updateUrlQueryParams: (newParameters: { [string]: string | number}) => void = (newParameters) => {
        const newQueryString: string = qs.stringify({
          ...queryParams,
          ...mapKeys(newParameters, (val, key) => getUrlQueryParamKey(key)),
        })

        history.push({
          ...location,
          key: null,
          search: `?${newQueryString}`,
        })
      }

      const page: number = max([getUrlQueryParamIntValue('page', 1) - 1, 0])
      const perPage: number = getUrlQueryParamIntValue('per_page', options.defaultPageSize || PAGE_SIZE)
      const searchTerm: string = queryParams[getUrlQueryParamKey('search_term')] || '' // eslint-disable-line prefer-destructuring

      const defaultProps: PaginationProps = {
        onChangePage: (page) => updateUrlQueryParams({ page: page + 1 }),
        onChangePerPage: (perPage) => updateUrlQueryParams({ per_page: perPage }),
        onChangeSearchTerm: (newSearchTerm) => {
          if (searchTerm === newSearchTerm) return
          updateUrlQueryParams({
            page: 1,
            search_term: newSearchTerm,
          })
        },
        onChangeSortBy: (sortBy, direction) => updateUrlQueryParams({
          page: 1,
          sort_by: sortBy,
          sort_direction: direction,
        }),
        page,
        pageFirstItemIndex: page * perPage,
        perPage,
        searchTerm,
        sortBy: queryParams[getUrlQueryParamKey('sort_by')] || options.defaultSortBy,
        sortDirection: queryParams[getUrlQueryParamKey('sort_direction')] || options.defaultSortDirection || DEFAULT_SORT_DIRECTION,
      }
      const childProps: * = options.props ? options.props(defaultProps) : defaultProps

      return {
        ...childProps,
        ...passthruProps,
      }
    })
  )
}
