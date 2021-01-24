import "./App.css";
import React, { useState, useEffect } from "react";
// import { Formik, Form, Field } from 'formik'

import configService from "./services/config";

import UrlForm from "./components/UrlForm";

const App = () => {
  const [config, setConfig] = useState(null);
  const [configUrl, setConfigUrl] = useState("");

  const [streamUrl, setStreamUrl] = useState("");

  useEffect(() => {
    const getConfig = () => {
      configService.getConfig(configUrl).then((config) => {
        console.log(config);
        setConfig(config);
      });
    };

    if (!config) {
      getConfig();
    }

    // eslint-disable-next-line
  }, [config]);

  const getStreamUrlFromForm = (url) => {
    setConfigUrl(url.configUrl);

    setStreamUrl(url.streamUrl);
  };

  // console.log("url" + streamUrl)
  // console.log("config" + config)

  if (!configUrl) return <UrlForm getStreamUrlFromForm={getStreamUrlFromForm} />
  else {



  return (
    <div className="App">
      <img alt="stream from PiCam" src={streamUrl}></img>
      <p>
        Get config file: <a href={configUrl}>FILE</a>
      </p>
    </div>
  );
};
}

export default App;
