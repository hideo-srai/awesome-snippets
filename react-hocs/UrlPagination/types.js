// @flow
import type { SortDirection as _SortDirection } from '../../../types'

export type SortDirection = _SortDirection

export type PaginationProps = {|
  onChangePage: (number) => void,
  onChangePerPage: (number) => void,
  onChangeSearchTerm: (string) => void,
  onChangeSortBy: (string, SortDirection) => void,
  page: number,
  pageFirstItemIndex: number,
  perPage: number,
  searchTerm: ?string,
  sortBy: ?string,
  sortDirection: SortDirection,
|}

export type PaginationOptions<TChildProps> = {|
  defaultPageSize?: number,
  defaultSortBy?: string,
  defaultSortDirection?: SortDirection,
  paramPrefix?: string,
  props?: (PaginationProps) => TChildProps,
|}
