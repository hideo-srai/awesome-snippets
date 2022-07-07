// @flow
import { type Styles } from './styles'
import type { ComponentType, Node } from 'react'
import type { JssProps, ReactDomProps } from '../../../types'

export type OwnProps = {|
  ...ReactDomProps,
  defaultValue?: string,
  disabled?: boolean,
  endAdornment?: Node,
  error?: boolean,
  fullWidth?: boolean,
  helperText?: string,
  id: string,
  label?: string,
  multiline?: boolean,
  name?: string,
  onChange?: (string) => void,
  placeholder?: string,
  required?: boolean,
  rows?: string | number,
  type?: string,
  value?: string,
|}

export type Props = {|
  ...OwnProps,
  ...JssProps<Styles>,
|}

export type Type = ComponentType<OwnProps>
