import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'

import configReducer from './reducers/configReducer'
import urlReducer from './reducers/urlReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  config: configReducer,
  urls: urlReducer,
  notification: notificationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store