import React, { useState } from 'react'
import configService from '../services/config'
import { TextField, Button, Typography } from '@material-ui/core'

import dummy_config from '../demo_mode/config'

const UrlForm = ({ getStreamUrlFromForm }) => {
  const [streamUrl, setStreamUrl] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // add corresponding string to bast streamUrl
    let urls = {
      streamUrl,
      configUrl: streamUrl + 'config',
      positionUrl: streamUrl + 'move',
    }
    let config = await configService.getConfig(urls.configUrl)

    getStreamUrlFromForm(urls, config)
  }

  const handleValue = (e) => {
    let newValue = e.target.value
    setStreamUrl(newValue)
  }

  // set up dummy values for demo mode
  const handleDemoMode = () => {
    const dummy_values = {
      streamUrl: 'dummy_url',
      configUrl: 'dummy_config',
      positionUrl: 'dummy_move',
    }

    getStreamUrlFromForm(dummy_values, dummy_config)
  }

  return (
    <div className="urlForm">
      <Typography variant="body2">Please enter the URL of your Picam</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          className="input"
          value={streamUrl}
          name="streamUrl"
          onChange={handleValue}
        />
        <p></p>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
      <Button variant="outlined" onClick={handleDemoMode}>
        Start DEMO
      </Button>
    </div>
  )
}

export default UrlForm
