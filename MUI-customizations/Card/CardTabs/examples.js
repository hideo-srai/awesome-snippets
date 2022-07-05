// @flow
import { Text } from '../../Typography'
import { withState } from 'recompose'
import Card from '../'
import CardTab from '../CardTab'
import CardTabs from './'
import React from 'react'

const DefaultExample: * = withState('tabState', 'setActiveTab', {
  active: 'tab1',
})(
  ({ tabState, setActiveTab }) => (
    <Card
      title='Card with Tabs'
    >
      <CardTabs
        onChange={(event, value) => setActiveTab({ active: value })}
        value={tabState.active}
      >
        <CardTab
          label='View All'
          value='tab1'
        />
        <CardTab
          label='Search'
          value='tab2'
        />
      </CardTabs>
      {
        tabState.active === 'tab1' ? <Text>
          { 'View All Content' }
        </Text> : <Text>
          { 'Search Content' }
        </Text>
      }
    </Card>
  )
)

export const Default: * = <DefaultExample />

export default {
  navGroup: 'Card',
}
