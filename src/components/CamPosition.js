import React from 'react'
import configService from '../services/config'
import { Button, Typography } from '@material-ui/core'

import { useSelector } from 'react-redux'


// return component for repositioning camera
const CamPosition = ({ positionUrl }) => {

  let positionUrl2 = useSelector((state) => state.position)
  console.log(positionUrl2)


  const setCameraLeft = (steps=15) => {
    let position = {
      steps: steps,
      direction: 'left',
    }

    configService.setPosition(positionUrl, position)
  }

  const setCameraRight = (steps=15) => {
    console.log(steps)
    let position = {
      steps: steps,
      direction: 'right',
    }

    configService.setPosition(positionUrl, position)
  }

  return (
    <div className="camPosition">
      <Button variant="outlined" onClick={() => setCameraLeft(30)}>&lt;&lt;</Button>
      <Button variant="outlined" onClick={() => setCameraLeft()}>&lt;</Button>
      <Button variant="outlined" onClick={() => setCameraRight()}>&gt;</Button>
      <Button variant="outlined" onClick={() => setCameraRight(30)}>&gt;&gt;</Button>
      <Typography variant="body2">Click on button to adjust camera position accordingly</Typography>
    </div>
  )
}

export default CamPosition
