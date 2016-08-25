import React from 'react'
import ReactNative  from 'react-native-macos'
import { Provider } from 'react-redux'
import { Router, createMemoryHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import routes from './app/routes'
import configureStore from './app/store/configureStore'

const { AppRegistry } = ReactNative

const store = configureStore()

const memoryHistory = createMemoryHistory('/restock-report')
const history = syncHistoryWithStore(memoryHistory, store)

const BOHUtilities = () => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

AppRegistry.registerComponent('BOHUtilities', () => BOHUtilities)
