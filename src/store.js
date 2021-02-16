import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'

import configReducer from './reducers/configReducer'
import urlReducer from './reducers/urlReducer'

const reducer = combineReducers({
  config: configReducer,
  urls: urlReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store