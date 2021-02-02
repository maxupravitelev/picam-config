import React from 'react'
import dummy from '../demo_mode/dummy.gif'

const Capture = ({ streamUrl }) => {
  if (streamUrl == 'dummy_url') {
    streamUrl = dummy
  }

  return <img className="capture" alt="stream from PiCam" src={streamUrl}></img>
}

export default Capture
