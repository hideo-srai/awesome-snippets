/* eslint "flowtype-errors/enforce-min-coverage": [2, 30] */
// @flow
import { compose } from 'recompose'
import { forwardProps } from '../../../utils/props'
import { theming } from '../../../themes/d2'
import React, { type ComponentType, type ElementConfig } from 'react'
import Tab from '@material-ui/core/Tab'
import injectSheet from 'react-jss'
import styles, { type Styles } from './styles'
import type { JssProps, ReactDomProps } from '../../../../types'

type OwnProps = {|
  ...ElementConfig<typeof Tab>,
|}

type Props = {|
  ...ReactDomProps,
  ...JssProps<Styles>,
  ...OwnProps,
|}

const CardTab: ComponentType<Props> = ({
  classes,
  label,
  selected,
  value,
  ...props
}) => (
  <Tab
    classes={{
      label: classes.tabLabel,
      labelContainer: classes.tabLabelContainer,
      root: classes.tabRoot,
      selected: classes.tabSelected,
    }}
    label={label}
    selected={selected}
    value={value}
    {...forwardProps(props)}
  />
)

const ConnectedComponent: ComponentType<OwnProps> = compose(
  injectSheet(styles, { theming }),
)(CardTab)

export default ConnectedComponent
