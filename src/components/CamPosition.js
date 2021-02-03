import React from 'react'

import configService from '../services/config'

import { Button, Typography } from '@material-ui/core'

const CamPosition = ({ positionUrl }) => {


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
    <div className="camPosition">
      <Button variant="outlined" onClick={() => setCameraLeft(100)}>&lt;&lt;</Button>
      <Button variant="outlined" onClick={() => setCameraLeft()}>&lt;</Button>
      <Button variant="outlined" onClick={() => setCameraRight()}>&gt;</Button>
      <Button variant="outlined" onClick={() => setCameraRight(100)}>&gt;&gt;</Button>
      <Typography variant="body2">Click on button to adjust camera position accordingly</Typography>
    </div>
  )
}

export default CamPosition
