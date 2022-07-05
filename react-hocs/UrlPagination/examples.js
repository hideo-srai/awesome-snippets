// @flow
import { ceil, map, min, orderBy, range, sample, size } from 'lodash'
import { compose } from 'recompose'
import React, { Component } from 'react'
import withPagination from './'
import type { PaginationProps, SortDirection } from './types'

type Props1 = {|
  heading: string,
  ...PaginationProps,
|}

class SimplePaginationTestComponent extends Component<Props1> {
  render () {
    const { props: { heading, page, perPage, onChangePage, onChangePerPage } }: { props: * } = this
    const values: Array<number> = map(Array.from({ length: 150 }), (uuu, i) => i)

    return (
      <div>
        <div>
          { heading }
        </div>
        <div>
          Item indexes to show:
          { ' ' }
          { values.splice(page * perPage, perPage).join(',') }
        </div>
        <div>
          Page:
          { ' ' }
          { page }
        </div>
        <div>
          Per page:
          { ' ' }
          { perPage }
        </div>
        <button onClick={() => onChangePage(sample(range(0, 6)))}>
          Random page
        </button>
        <button onClick={() => onChangePerPage(sample([5, 10, 15]))}>
          Change Per Page
        </button>
      </div>
    )
  }
}

const SimplePaginationTestComponentWithHoc: * = compose(
  withPagination(),
)(SimplePaginationTestComponent)

type Props2 = {|
  ...PaginationProps,
|}

class AdvancedPaginationTestComponent extends Component<Props2> {
  render () {
    const { props: { page, pageFirstItemIndex, perPage, sortBy, sortDirection, onChangePage, onChangePerPage, onChangeSortBy } }: { props: * } = this
    const tableData: Array<*> = [{
      age: 25,
      email: 'djohn@vydia.test',
      name: 'John Doe',
    }, {
      age: 40,
      email: 'lucas.leon@vydia.test',
      name: 'Lucas Leon',
    }, {
      age: 30,
      email: 'shirai.h@vydia.test',
      name: 'Hideo Shirai',
    }, {
      age: 28,
      email: 'xman.donald@vydia.test',
      name: 'Donald Smith',
    }, {
      age: 35,
      email: 'lightbulb.susan@vydia.test',
      name: 'Susan Green',
    }, {
      age: 27,
      email: 'map.rose@vydia.test',
      name: 'Rose Ipsum',
    }, {
      age: 21,
      email: 'adavid@vydia.test',
      name: 'David Auch',
    }]

    const total: number = size(tableData)
    const pages: number = ceil(total / perPage)
    const pageData: Array<*> = sortBy ? orderBy(tableData, [sortBy], [sortDirection]) : tableData

    return (
      <div>
        <div>
          { 'Showing: ' }
          { pageFirstItemIndex + 1 }
          { '-' }
          { min([pageFirstItemIndex + perPage, total]) }
          { '/' }
          { total }
          { ', Sort By: ' }
          { sortBy }
          { ', Sort Direction: ' }
          { sortDirection }
        </div>
        <button
          data-test-id='page-change-button'
          onClick={() => onChangePage(page >= pages - 1 ? 0 : page + 1)}
        >
          Next Page
        </button>
        <button onClick={() => onChangePerPage(sample([5, 10]))}>
          Per Page
        </button>
        <button onClick={() => onChangeSortBy(sample(['age', 'email', 'name']), sortDirection)}>
          SortBy
        </button>
        <button onClick={() => onChangeSortBy(sortBy || 'age', sortDirection === 'asc' ? 'desc' : 'asc')}>
          SortDirection
        </button>
        <table width='100%'>
          <tbody>
            { map(pageData.splice(page * perPage, perPage), (person) => (
              <tr key={person.email}>
                <td>
                  { person.age }
                </td>
                <td>
                  { person.name }
                </td>
                <td>
                  { person.email }
                </td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    )
  }
}

const AdvancedPaginationTestComponentWithHoc: * = compose(
  withPagination({
    defaultPageSize: 4,
    defaultSortDirection: 'desc',
    paramPrefix: 'advancedTable',
  }),
)(AdvancedPaginationTestComponent)

type Props3 = {|
  onChangeOtherTablePage: (number) => void,
  onChangeOtherTablePerPage: (number) => void,
  onChangeOtherTableSortBy: (string, SortDirection) => void,
  onChangeUserTablePage: (number) => void,
  onChangeUserTablePerPage: (number) => void,
  otherTablePage: number,
  otherTablePerPage: number,
  otherTableSortBy: ?string,
  userTablePage: number,
  userTablePerPage: number,
|}

class PaginationMultiTablesTestComponent extends Component<Props3> {
  render () {
    const { props: { userTablePage, userTablePerPage, onChangeUserTablePage, onChangeUserTablePerPage } }: { props: * } = this
    const { props: { otherTablePage, otherTablePerPage, onChangeOtherTablePage, onChangeOtherTablePerPage } }: { props: * } = this
    const values1: Array<number> = map(Array.from({ length: 150 }), (uuu, i) => i)
    const values2: Array<number> = map(Array.from({ length: 150 }), (uuu, i) => i)

    return (
      <div>
        <div>
          Item indexes to show:
          { ' ' }
          { values1.splice(userTablePage * userTablePerPage, userTablePerPage).join(',') }
        </div>
        <div>
          Page:
          { ' ' }
          { userTablePage }
        </div>
        <div>
          Per page:
          { ' ' }
          { userTablePerPage }
        </div>
        <button onClick={() => onChangeUserTablePage(sample(range(0, 7)))}>
          Random page
        </button>
        <button onClick={() => onChangeUserTablePerPage(sample([5, 10, 15]))}>
          Change Per Page
        </button>
        <hr />
        <div>
          Item indexes to show:
          { ' ' }
          { values2.splice(otherTablePage * otherTablePerPage, otherTablePerPage).join(',') }
        </div>
        <div>
          Page:
          { ' ' }
          { otherTablePage }
        </div>
        <div>
          Per page:
          { ' ' }
          { otherTablePerPage }
        </div>
        <button onClick={() => onChangeOtherTablePage(sample(range(0, 7)))}>
          Random page
        </button>
        <button onClick={() => onChangeOtherTablePerPage(sample([5, 10, 15]))}>
          Change Per Page
        </button>
      </div>
    )
  }
}

const PaginationMultiTablesTestComponentWithHoc: * = compose(
  withPagination({
    paramPrefix: 'userTable',
    props: ({ page, perPage, onChangePage, onChangePerPage }) => ({
      onChangeUserTablePage: onChangePage,
      onChangeUserTablePerPage: onChangePerPage,
      userTablePage: page,
      userTablePerPage: perPage,
    }),
  }),
  withPagination({
    defaultPageSize: 20,
    paramPrefix: 'otherTable',
    props: ({ page, perPage, sortBy, onChangePage, onChangePerPage, onChangeSortBy }) => ({
      onChangeOtherTablePage: onChangePage,
      onChangeOtherTablePerPage: onChangePerPage,
      onChangeOtherTableSortBy: onChangeSortBy,
      otherTablePage: page,
      otherTablePerPage: perPage,
      otherTableSortBy: sortBy,
    }),
  }),
)(PaginationMultiTablesTestComponent)

export const Default: *
  = <SimplePaginationTestComponentWithHoc heading='This table uses withPaginationHoc!' />

export const Advanced: *
  = <AdvancedPaginationTestComponentWithHoc />

export const MultiTables: *
  = <PaginationMultiTablesTestComponentWithHoc />

export default {
  navGroup: 'Higher Order Components',
}
