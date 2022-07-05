// @flow
import { CardSectionTitle, CardSectionValue, Text } from '../../components/Typography'
import { Col, Grid } from '../Grid'
import Button from '../../components/Button'
import Card, { CardSection } from './'
import React from 'react'

export const Default: *
= (
  <Card
    title='Basic Card'
  >
    <Text>
      Card body text
    </Text>
  </Card>)

export const WithTopButton: *
  = (<Card
    title='Basic card'
    topButtons={(<Button
      icon='edit'
      link
      onCard
    />)}
  />)

export const WithoutTitle: *
  = (<Card>
    <Text>
      Card body text
    </Text>
  </Card>)

export const WithBottomButtonsSameAsTop: *
  = (<Card
    bottomButtons
    title='Basic card'
    topButtons={(<Button>
      Update
    </Button>)}
  >
    <Text>
      Content
    </Text>
  </Card>)

export const WithBottomButton: *
  = (<Card
    bottomButtons={(<Button>
      Update
    </Button>)}
    title='Basic card'
  >
    <Text>
      Content
    </Text>
  </Card>)

export const CardSectionStandalone: *
  = (
    <Grid>
      <Col sm={4}>
        <CardSection
          title={<CardSectionTitle>
            Estimated Views from All Videos
          </CardSectionTitle>}
        >
          <CardSectionValue>
            8,152,508
          </CardSectionValue>
        </CardSection>
      </Col>
    </Grid>
  )

export const WithSections: *
= (
  <Card
    title='Card With Section'
  >
    <Grid>
      <Col sm={3}>
        <CardSection
          title={<CardSectionTitle>
            This is 1
          </CardSectionTitle>}
        >
          <CardSectionValue>
            8,152,508
          </CardSectionValue>
        </CardSection>
      </Col>
      <Col sm={3}>
        <CardSection
          title={<CardSectionTitle>
            This is 2
          </CardSectionTitle>}
        >
          <CardSectionValue>
            252,228
          </CardSectionValue>
        </CardSection>
      </Col>
      <Col sm={3}>
        <CardSection
          title={<CardSectionTitle>
            This is 3
          </CardSectionTitle>}
        >
          <CardSectionValue>
            563,123
          </CardSectionValue>
        </CardSection>
      </Col>
      <Col sm={3}>
        <CardSection
          title={<CardSectionTitle>
            This is 4
          </CardSectionTitle>}
        >
          <CardSectionValue>
            993,123
          </CardSectionValue>
        </CardSection>
      </Col>
    </Grid>
  </Card>)
