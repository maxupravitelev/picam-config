import configService from '../services/config'
import dummy_config from '../demo_mode/config'

let initState = [
  {config: null},
  {urls: null}

]

const configReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'SET_CONFIG':
      return [...state, action.data]
    case 'SET_URLS':
      return [...state, action.data]
    case 'SET_STREAM_URL':
      return action.data
    case 'SET_POSITION_URL':
      return [...state, action.data]
    case 'UPDATE_CONFIG':
      return state.filter(config => config.id !== action.data.id)
    default:
      return state
  }
}

export const setUrls = (urls) => {
  return async dispatch => {
    dispatch({
      type: 'SET_URLS',
      data: urls
    })
  }
}

export const initializeConfig = (configUrl) => {
  return async dispatch => {
    if (configUrl == 'dummy_config') {
      dispatch({
        type: 'SET_CONFIG',
        data: dummy_config
      })
    } else {
      const config = await configService.getConfig(configUrl)
      dispatch({
        type: 'SET_CONFIG',
        data: config
      })
    }
  }
}

export const initializePosition = (positionUrl) => {
  return async dispatch => {
    dispatch({
      type: 'SET_POSITION_URL',
      data: { positionUrl }
    })
  }
}

export default configReducer