import configService from '../services/config'
import dummy_config from '../demo_mode/config'



const configReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'SET_CONFIG':
      return action.data
    case 'UPDATE_CONFIG':
      return action.data
    default:
      return state
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

export const updateConfig = (config) => {
  return async dispatch => {
    dispatch({
      type: 'UPDATE_CONFIG',
      data: config
    })
  }
}

export default configReducer