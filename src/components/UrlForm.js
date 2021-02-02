import React, { useState } from 'react'
import configService from '../services/config'

import { TextField, Button } from '@material-ui/core'

import dummy_config from '../demo_mode/config'

const UrlForm = ({ getStreamUrlFromForm }) => {


  // const [url, setUrl] = useState("")
  const [streamUrl, setStreamUrl] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    let urls = {
      streamUrl,
      configUrl: streamUrl + 'config',
      moveUrl: streamUrl + 'move'
    }
    // if (!url) return;
    let config = await configService.getConfig(urls.configUrl)

    getStreamUrlFromForm(urls, config)

    // setValue(initValue)
  }


  const handleValue = (e) => {

    let newValue = e.target.value
    setStreamUrl(
      newValue
    )
  }

  const handleDemoMode = () => {
    const dummy_values = {
      streamUrl: 'dummy_url',
      configUrl: 'dummy_config',
      moveUrl: 'dummy_move'
    }

    getStreamUrlFromForm(dummy_values, dummy_config)
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          className="input"
          value={streamUrl}
          name="streamUrl"
          onChange={handleValue}
        />
        <Button 
          type="submit"
          variant="outlined">
            Submit
        </Button>
        {/* <button>Submit</button> */}
      </form>
      <Button variant="outlined"
        onClick={handleDemoMode}
        >
          Start DEMO
          </Button>
    </div>
  )
}

export default UrlForm
