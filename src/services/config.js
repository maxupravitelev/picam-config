import axios from "axios";

// const configUrl = "http://0.0.0.0:8000/";

const getConfig = async (configUrl) => {
  const request = axios.get(configUrl + '/config');
  const response = await request;
    return response.data;
};

const setConfig = async (configUrl, newObject) => {
  const request = axios.post(configUrl, newObject);
  // console.log(newObject)
  const response = await request;
    return response.data;
};

let configService = { getConfig, setConfig }
export default configService