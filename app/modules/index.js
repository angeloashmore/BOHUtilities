import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import restockReport from './restockReport'

export default combineReducers({
  restockReport,
  routing
})
