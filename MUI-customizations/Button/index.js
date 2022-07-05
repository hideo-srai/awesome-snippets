// @flow
/* eslint "flowtype-errors/enforce-min-coverage": [2, 29] */
import { Link } from 'react-router-dom'
import { forwardProps } from '../../utils/props'
import { isFunction, isString } from 'lodash'
import { theming } from '../../themes/d2'
import FaIcon from '../FontAwesome'
import MaterialButton from '@material-ui/core/Button'
import Providers from '../../providers/standalone'
import React, { type ComponentType, type Node } from 'react'
import cx from 'classnames'
import injectSheet from 'react-jss'
import styles, { type Styles } from './styles'
import type { JssProps } from '../../../types'
import type { Props as _Props } from '@material-ui/core/Button/Button'

type OwnProps = {|
  ...$Exact<_Props>,
  accent?: boolean,
  active?: boolean,
  blank?: boolean,
  block?: boolean,
  contrast?: boolean,
  danger?: boolean,
  ghost?: boolean,
  highlight?: boolean,
  icon?: string | Node | () => Node,
  link?: boolean,
  onCard?: boolean,
  primary?: boolean,
  secondary?: boolean,
  size?: string,
  success?: string,
  tertiary?: boolean,
|}

type Props = {|
  ...JssProps<Styles>,
  ...OwnProps,
|}

const DEFAULT: string = 'default'
const SMALL: string = 'small'
const LARGE: string = 'large'

export type Type = ComponentType<OwnProps>

const Button: React$StatelessFunctionalComponent<Props> = ({
  accent,
  active,
  block,
  blank,
  children,
  classes,
  className,
  contrast,
  danger,
  ghost,
  highlight,
  icon,
  link,
  linkBlack,
  onCard,
  primary,
  secondary,
  size,
  success,
  tertiary,
  to,
  ...props
}) => (
  <MaterialButton
    className={cx({
      [classes.button]: !blank,
      [classes.default]: size === DEFAULT || size === null,
      [classes.small]: size === SMALL,
      [classes.large]: size === LARGE,
      [classes.danger]: danger,
      [classes.link]: link,
      [classes.linkBlack]: linkBlack,
      [classes.ghost]: ghost,
      [classes.tertiary]: tertiary,
      [classes.primary]: primary,
      [classes.secondary]: secondary,
      [classes.success]: success,
      [classes.highlight]: highlight,
      [classes.block]: block,
      [classes.blank]: blank,
      [classes.onCard]: onCard,
      [classes.noBorder]: !!icon && React.Children.count(children) === 0,
    }, className)}
    color={
      primary
        ? 'primary'
        : secondary
          ? 'secondary'
          : 'primary'
    }
    disableRipple={link || danger || highlight || blank}
    variant={link || danger || highlight ? 'flat' : 'raised'}
    {...to ? {
      component: Link,
      to,
    } : {}}
    {...forwardProps(props)}
  >
    { icon && isFunction(icon) ? icon() : isString(icon) ? <FaIcon
      className={cx(classes.icon, {
        [classes.iconNoSpacing]: React.Children.count(children) === 0,
      })}
      icon={icon}
      weight='solid'
    />
      : icon }
    { children }
  </MaterialButton>
)

const ConnectedComponent: ComponentType<OwnProps> = injectSheet(styles, { theming })(Button)

export const ComponentWithProviders: ComponentType<OwnProps> = (props) => (<Providers>
  <ConnectedComponent {...props} />
</Providers>)

export default ConnectedComponent
