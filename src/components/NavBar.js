// import react & redux
import React from 'react'
import { useSelector } from 'react-redux'

import { Button, Typography } from '@material-ui/core'

import RestoreIcon from '@material-ui/icons/Restore';
import SendIcon from '@material-ui/icons/Send';
import FindInPageIcon from '@material-ui/icons/FindInPage';


// import backend service
import configService from '../services/config'



const NavBar = ({ }) => {

  let config = useSelector((state) => state.config.content)
  let configUrl = useSelector((state) => state.urls.configUrl)

  const handleSend = (e) => {
    e.preventDefault()

    configService.setConfig(configUrl, config)
  }

  return (
    <div className="navbar">
      <Button href={configUrl} variant="outlined">
        <FindInPageIcon />
      </Button>
      <Typography variant='caption'>view file</Typography>

      <Button type="submit" variant="outlined">
        <RestoreIcon />
      </Button>
      <Typography variant='caption'>restore</Typography>
      <Button onClick={handleSend} type="submit" variant="outlined">
        <SendIcon />
      </Button>
      <Typography variant='caption'>send</Typography>

    </div>
  )
}

export default NavBar
