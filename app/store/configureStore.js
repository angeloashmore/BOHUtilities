import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'

import rootReducer from '../modules'

const logger = createLogger()

const promise = promiseMiddleware()

const enhancer = compose(
  applyMiddleware(thunk, promise, logger)
)

export default (initialState) => (
  createStore(rootReducer, initialState, enhancer)
)
