import './App.css'
import React, {
  useState,
  // useEffect
} from 'react'
// import { Formik, Form, Field } from 'formik'

// import configService from "./services/config"

import UrlForm from './components/UrlForm'
import ConfigList from './components/ConfigList'

import Header from './components/Header'
import Capture from './components/Capture'

const App = () => {
  const [config, setConfig] = useState(null)
  const [configUrl, setConfigUrl] = useState('')
  const [streamUrl, setStreamUrl] = useState('')
  const [positionUrl, setPositionUrl] = useState('')


  const getStreamUrlFromForm = (urls, configJson) => {

    setConfigUrl(urls.configUrl)
    setStreamUrl(urls.streamUrl)
    setPositionUrl(urls.positionUrl)
    setConfig(configJson)
  }

  if (!streamUrl)
    return (
      <div>
        <Header />
        <UrlForm getStreamUrlFromForm={getStreamUrlFromForm} />
      </div>
    )
  else {
    return (
      <div className="App">
        <Header />
        <Capture streamUrl={streamUrl} positionUrl={positionUrl}/>

        <ConfigList config={config} configUrl={configUrl} setConfig={setConfig}/>
      </div>
    )
  }
}

export default App
