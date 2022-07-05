// @flow
import type { JssProps, ReactDomProps } from '../../../types'
import type { Node } from 'react'
import type { Styles } from './styles'

type AllowedTitleSize = 'md' | 'lg'

export type OwnProps = {|
  ...ReactDomProps,
  bottomButtons?: Node | boolean,
  noLineMarginBottom?: boolean,
  testID?: string,
  title?: string,
  titleSize?: AllowedTitleSize,
  topButtons?: Node,
|}

export type Props = {|
  ...JssProps<Styles>,
  ...OwnProps,
|}
