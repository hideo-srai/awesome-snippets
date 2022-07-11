// @flow
import { type Node } from 'react'
import type { ColOwnProps } from '../Grid'
import type { JssProps } from '../../../types'
import type { Styles } from './styles'

export type OwnProps = {|
  ...ColOwnProps,
  alpha?: ?number,
  children: Node,
  footNote?: ?Node,
  heading?: ?Node,
  id?: string,
  maxWidthPx?: number,
  noVertical?: boolean,
  onToggleClose?: (boolean) => void,
  subHeading?: ?Node,
|}

export type Props = {|
  ...OwnProps,
  ...JssProps<Styles>,
|}

export type LoadingType = React$StatelessFunctionalComponent<JssProps<Styles>>
export type Type = React$StatelessFunctionalComponent<Props>
