// @flow
/* eslint "flowtype-errors/enforce-min-coverage": [2, 25] */
import { Col, Container, Grid } from '../Grid'
import { Footnote, Text } from '../Typography'
import { forwardProps } from '../../utils/props'
import { theming } from '../../themes/d2'
import FaIcon from '../../../components/FaIcon.jsx'
import Overlay from '../../../components/Overlay.jsx'
import React, { type ComponentType, type StatelessFunctionalComponent } from 'react'
import injectSheet from 'react-jss'
import styles from './styles'
import type { OwnProps, Props } from './types'

const Modal: StatelessFunctionalComponent<Props> = ({
  heading,
  subHeading,
  children,
  footNote,
  onToggleClose,
  noVertical,
  classes,
  maxWidthPx,
  id,
  alpha,
  ...props
}) => (
  <Overlay
    alpha={alpha}
    light
    noVertical={noVertical || false}
    onClickAway={onToggleClose || null}
  >
    <Container>
      <Grid
        justify='center'
      >
        <Col
          style={maxWidthPx ? { maxWidth: `${maxWidthPx}px` } : null}
          {...forwardProps(props)}
        >
          <Grid
            className={classes.modalContainer}
            id={id}
          >
            { onToggleClose && (
              <FaIcon
                className={classes.closeButton}
                icon='times'
                library='fal'
                onClick={onToggleClose}
              />
            ) }
            { heading && (
              <div
                className={classes.headingWrapper}
              >
                <div
                  className={classes.modalHeading}
                >
                  { heading }
                </div>
                {
                  subHeading
                  && <div className={classes.subHeading}>
                    { subHeading }
                  </div>
                }
              </div>
            ) }
            <Text className={classes.content}>
              { children }
            </Text>
            { footNote && (
              <Col
                className={classes.footNote}
                xs={12}
              >
                <Footnote>
                  { footNote }
                </Footnote>
              </Col>
            ) }
          </Grid>
        </Col>
      </Grid>
    </Container>
  </Overlay>
)

const connected: ComponentType<OwnProps> = injectSheet(styles, { theming })(Modal)

export default connected
