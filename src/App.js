import './App.css';
import React, { useState, useEffect } from 'react';
// import { Formik, Form, Field } from 'formik'


import configService from "./services/config"

import UrlForm from "./components/UrlForm"

const App = () => {

  const [config, setConfig] = useState({})
  const [url, setUrl] = useState("")


  useEffect(() => {
    configService.getConfig(url).then(config => {
      console.log(config);
      setConfig(config);
    });
  // eslint-disable-next-line
  }, [url]);

  const callUrl = (url) => {

    configService.getConfig(url).then(config => {
      setConfig(config)
    }) 

    setUrl(url)
  }

  console.log(url)

  return (
    <div className="App">
      <UrlForm callUrl={callUrl} />
      <img alt="stream from PiCam" src={url} ></img>
      
    </div>
  );
}

export default App;
