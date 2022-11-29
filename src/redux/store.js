import { createStore, applyMiddleware } from 'redux'
import { Reducer } from './reducer'
import logger from 'redux-logger'

const mystore = createStore(Reducer, applyMiddleware(logger))

export default mystore