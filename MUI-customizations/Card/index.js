// @flow
import { CardTitleLarge, CardTitleMedium } from '../Typography'
import { MEDIUM_CARD_TITLE_SIZE } from './constants'
import { forwardProps } from '../../utils/props'
import { isBoolean } from 'lodash'
import { theming } from '../../themes/d2'
import CardSection from './CardSection'
import React, { type ComponentType } from 'react'
import SpaceBetween from '../../components/Layout/SpaceBetween'
import cx from 'classnames'
import injectSheet from 'react-jss'
import styles from './styles'
import type { OwnProps, Props } from './types'

const Card: ComponentType<$Shape<Props>> = ({ bottomButtons, classes, className, children, noLineMarginBottom, title, titleSize, linkButtons, topButtons, ...props }) => (
  <div
    className={cx(classes.container, className)}
    {...forwardProps(props)}
  >
    <SpaceBetween>
      { title && (titleSize === MEDIUM_CARD_TITLE_SIZE ? (
        <CardTitleMedium>
          { title }
        </CardTitleMedium>
      ) : (
        <CardTitleLarge>
          { title }
        </CardTitleLarge>
      )) }
      <div className={classes.topButtonWrapper}>
        { topButtons }
      </div>
    </SpaceBetween>

    <div>
      { title && <hr className={cx(classes.horizontalLine, { [classes.noMarginBottom]: noLineMarginBottom })} /> }
      { children }
    </div>
    { bottomButtons && (
      <div className={classes.bottomButtons}>
        { isBoolean(bottomButtons) ? topButtons : bottomButtons }
      </div>
    ) }
  </div>
)

const ConnectedComponent: ComponentType<OwnProps> = injectSheet(styles, { theming })(Card)
export default ConnectedComponent

export { CardSection }
