// @flow
import { compose } from 'recompose'
import { forwardProps } from '../../../utils/props'
import { theming } from '../../../themes/d2'
import React, { type ComponentType, type ElementConfig } from 'react'
import Tabs from '@material-ui/core/Tabs'
import injectSheet from 'react-jss'
import styles, { type Styles } from './styles'
import type { JssProps, ReactDomProps } from '../../../../types'

type OwnProps = {|
  ...ElementConfig<typeof Tabs>,
|}

type Props = {|
  ...ReactDomProps,
  ...JssProps<Styles>,
  ...OwnProps,
|}

const CardTabs: ComponentType<Props> = ({
  children,
  classes,
  value,
  ...props
}) => (
  <Tabs
    classes={{
      indicator: classes.indicator,
      root: classes.tabsRoot,
    }}
    fullWidth
    indicatorColor='primary'
    textColor='primary'
    value={value}
    {...forwardProps(props)}
  >
    { children }
  </Tabs>
)

const ConnectedComponent: ComponentType<OwnProps> = compose(
  injectSheet(styles, { theming }),
)(CardTabs)

export default ConnectedComponent
