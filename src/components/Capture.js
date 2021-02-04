import React from 'react'
import dummy from '../demo_mode/dummy.gif'
import CamPosition from '../components/CamPosition'

// return live stream component
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
