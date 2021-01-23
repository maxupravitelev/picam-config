import axios from "axios";

const configUrl = "http://0.0.0.0:8000/";

export const getConfig = (listId) => {
  const request = axios.get(configUrl + listId);
  return request.then((response) => response.data);
};

export const setConfig = (newObject) => {
  const request = axios.post(configUrl, newObject);
  // console.log(newObject)
  return request.then((response) => response.data);
};

