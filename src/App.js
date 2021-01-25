import "./App.css";
import React, { useState, useEffect } from "react";
// import { Formik, Form, Field } from 'formik'

import configService from "./services/config";

import UrlForm from "./components/UrlForm";
import ConfigList from "./components/ConfigList";

const App = () => {
  const [config, setConfig] = useState(null);
  const [configUrl, setConfigUrl] = useState("");

  const [streamUrl, setStreamUrl] = useState("");

  // useEffect(() => {
  //     configService.getConfig(configUrl).then((config) => {
  //       console.log(config);
  //       setConfig(config);
  //     });

  //   // eslint-disable-next-line
  // }, [config]);

  const getStreamUrlFromForm = (url, configO) => {
    setConfigUrl(url.configUrl);
    // console.log(configUrl)
    setStreamUrl(url.streamUrl);
    // console.log(streamUrl)
    setConfig(configO)
  };

  // console.log("url" + streamUrl)
  // console.log("config" + config)

  if (!configUrl)
    return <UrlForm getStreamUrlFromForm={getStreamUrlFromForm} />;
  else {
    return (
      <div className="App">
        <UrlForm config={config} getStreamUrlFromForm={getStreamUrlFromForm} />
        <img alt="stream from PiCam" src={streamUrl}></img>
        <p>
          Get config file: <a href={configUrl}>FILE</a>
        </p>
        <ConfigList config={config} configUrl={configUrl} />
      </div>
    );
  }
};

export default App;
