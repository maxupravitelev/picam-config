import React from 'react'
import dummy from '../demo_mode/dummy.gif'

import configService from '../services/config'

import { Button, Typography } from '@material-ui/core'

const Capture = ({ streamUrl, positionUrl }) => {
  if (streamUrl == 'dummy_url') {
    streamUrl = dummy
  }

  const setCameraLeft = (steps=50) => {
    let position = {
      steps: steps,
      direction: 'left',
    }

    configService.setPosition(positionUrl, position)
  }

  const setCameraRight = (steps=50) => {
    console.log(steps)
    let position = {
      steps: steps,
      direction: 'left',
    }

    configService.setPosition(positionUrl, position)
  }

  return (
    <div className="capture">
      <img alt="stream from PiCam" src={streamUrl}></img>
      <Button onClick={() => setCameraLeft(100)}>&lt;&lt;</Button>
      <Button onClick={() => setCameraLeft()}>&lt;</Button>
      <Button onClick={() => setCameraRight()}>&gt;</Button>
      <Button onClick={() => setCameraRight(100)}>&gt;&gt;</Button>
      <Typography>Click on button to adjust camera position accordingly</Typography>
    </div>
  )
}

export default Capture
