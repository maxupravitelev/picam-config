import React from 'react'
import dummy from '../demo_mode/dummy.gif'

import configService from '../services/config'

import { Button, Typography } from '@material-ui/core'
import CamPosition from '../components/CamPosition'

const Capture = ({ streamUrl, positionUrl }) => {
  if (streamUrl == 'dummy_url') {
    streamUrl = dummy
  }


  return (
    <div className="capture">
      <img alt="stream from PiCam" src={streamUrl}></img>
      <CamPosition positionUrl={positionUrl} />

    </div>
  )
}

export default Capture
