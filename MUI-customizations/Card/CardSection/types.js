// @flow
import type { ComponentType, Node } from 'react'
import type { JssProps, ReactDomProps } from '../../../../types'
import type { Styles } from './styles'

export type OwnProps = {|
  ...ReactDomProps,
  title?: Node,
|}

export type Props = {|
  ...OwnProps,
  ...JssProps<Styles>,
|}

export type Type = ComponentType<OwnProps>
