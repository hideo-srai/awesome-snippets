// @flow
import { forwardProps } from '../../../utils/props'
import { theming } from '../../../themes/d2'
import React, { type ComponentType } from 'react'
import cx from 'classnames'
import injectSheet from 'react-jss'
import styles from './styles'
import type { OwnProps, Props } from './types'

const CardSection: ComponentType<Props> = ({
  children,
  classes,
  className,
  title,
  ...props
}) => (
  <div
    className={cx(classes.container, className)}
    {...forwardProps(props)}
  >
    { title
      && <div className={classes.title}>
        { title }
      </div>
    }
    { children }
  </div>
)

const ConnectedComponent: ComponentType<OwnProps> = injectSheet(styles, { theming })(CardSection)

export default ConnectedComponent
