import React from "react";


const Capture = ({ streamUrl }) => {
  return (
      <img className="capture" alt="stream from PiCam" src={streamUrl}></img>
  )
};

export default Capture
