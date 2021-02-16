import configService from '../services/config'
import dummy_config from '../demo_mode/config'


const urlReducer = (state = [], action) => {
  // console.log('state now: ', state)
  // console.log('action', action)

  switch (action.type) {
    case 'SET_URLS':
      return action.data

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


export default urlReducer