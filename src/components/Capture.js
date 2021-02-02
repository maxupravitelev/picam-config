import React from 'react'
import dummy from '../demo_mode/dummy.gif'

import configService from '../services/config'

import { Button } from '@material-ui/core'

const Capture = ({ streamUrl, positionUrl }) => {
  if (streamUrl == 'dummy_url') {
    streamUrl = dummy
  }

  const setCameraLeft = () => {
    let position = {
      steps: 50,
      direction: 'left',
    }

    configService.setPosition(positionUrl, position)
  }

  const setCameraRight = () => {
    let position = {
      steps: 50,
      direction: 'left',
    }

    configService.setPosition(positionUrl, position)
  }

  return (
    <div className="capture">
      <img alt="stream from PiCam" src={streamUrl}></img>
      <button onClick={setCameraLeft}>LEFT</button>
      <button onClick={setCameraRight}>RIGHT</button>
    </div>
  )
}

export default Capture
