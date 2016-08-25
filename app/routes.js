import React from 'react'
import { Route } from 'react-router'

import App from './components/App'
import RestockReport from './containers/RestockReport'
import InTransitExpected from './components/utilities/InTransitExpected'
import TextLabel from './components/utilities/TextLabel'
import UpdateCategories from './components/utilities/UpdateCategories'

export default (
  <Route path='/' component={App}>
    <Route path='restock-report' component={RestockReport} />
    <Route path='in-transit-expected' component={InTransitExpected} />
    <Route path='text-label' component={TextLabel} />
    <Route path='update-categories' component={UpdateCategories} />
  </Route>
)
