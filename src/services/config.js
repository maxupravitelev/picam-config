import axios from "axios";

const configUrl = "http://0.0.0.0:8000/";

const getConfig = async (listId) => {
  const request = axios.get(configUrl + listId);
  const response = await request;
    return response.data;
};

const setConfig = async (newObject) => {
  const request = axios.post(configUrl, newObject);
  // console.log(newObject)
  const response = await request;
    return response.data;
};

export default { getConfig, setConfig}