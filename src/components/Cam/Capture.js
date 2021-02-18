import React from 'react'
import dummy from '../../demo_mode/dummy.gif'
import CamPosition from './CamPosition'

import { useSelector } from 'react-redux'


// return live stream component
const Capture = ({  }) => {

  let streamUrl = useSelector((state) => state.urls.streamUrl)
  let positionUrl = useSelector((state) => state.urls.streamUrl)

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
