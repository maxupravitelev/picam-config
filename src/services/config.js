import axios from 'axios'

// const configUrl = "http://0.0.0.0:8000/";

const getStream = async (streamUrl) => {
  const request = axios.get(streamUrl)
  const response = await request
  return response.data
}

const getConfig = async (configUrl) => {
  const request = axios.get(configUrl)
  const response = await request
  return response.data
}

const setConfig = async (configUrl, newObject) => {
  const request = axios.post(configUrl, newObject)
  const response = await request
  return response.data
}

const getPosition = async (positionUrl) => {
  const request = axios.get(positionUrl)
  const response = await request
  return response.data
}

const setPosition = async (positionUrl, newObject) => {
  const request = axios.post(positionUrl, newObject)
  const response = await request
  return response.data
}

let configService = { getConfig, setConfig, getStream, getPosition, setPosition }
export default configService
