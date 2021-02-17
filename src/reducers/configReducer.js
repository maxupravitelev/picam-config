import configService from '../services/config'
import dummy_config from '../demo_mode/config'



const configReducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'SET_CONFIG':
      return [...state, action.data, action.data]
    case 'UPDATE_CONFIG':
      return [...state, action.data]
    case 'RESTORE_CONFIG':
      return [action.data]
    default:
      return state
  }
}


// export const initializeConfig = (configUrl) => {
//   return async dispatch => {
//     if (configUrl == 'dummy_config') {
//       dispatch({
//         type: 'SET_CONFIG',
//         data: dummy_config
//       })
//     } else {
//       const config = await configService.getConfig(configUrl)
//       dispatch({
//         type: 'SET_CONFIG',
//         data: config
//       })
//     }
//   }
// }

export const initializeConfig = (configUrl) => {
  return async dispatch => {
    if (configUrl == 'dummy_config') {

      // const config = {
      //   content: dummy_config,
      //   counter: 0
      // }

      dispatch({
        type: 'SET_CONFIG',
        data: dummy_config
      })
    } else {
      const config_json = await configService.getConfig(configUrl)
      // const config = {
      //   content: config_json,
      //   backup: config_json,
      //   counter: 0
      // }

      dispatch({
        type: 'SET_CONFIG',
        data: config_json
      })
    }
  }
}

export const updateConfig = (config) => {
  console.log(config)
  return async dispatch => {
    dispatch({
      type: 'UPDATE_CONFIG',
      data: config
    })
  }
}

export const restoreConfig = (firstConfig) => {
  return async dispatch => {
    dispatch({
      type: 'RESTORE_CONFIG',
      data: firstConfig
    })
  }
}

export default configReducer