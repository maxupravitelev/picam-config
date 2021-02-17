// import react & redux
import React from 'react'

import { Button, Typography } from '@material-ui/core'

import RestoreIcon from '@material-ui/icons/Restore';
import SendIcon from '@material-ui/icons/Send';
import FindInPageIcon from '@material-ui/icons/FindInPage';


// import backend service
import configService from '../services/config'

import { useDispatch, useSelector } from 'react-redux'
import { restoreConfig } from '../reducers/configReducer'


const NavBar = ({ }) => {

  let counter = useSelector((state) => state.config.length)
  let config = useSelector((state) => state.config[counter - 1])
  const firstConfig = useSelector((state) => state.config[0])

  let configUrl = useSelector((state) => state.urls.configUrl)

  const dispatch = useDispatch()


  const handleSend = (e) => {
    e.preventDefault()

    configService.setConfig(configUrl, config)
  }

  const handleBackup = (e) => {
    e.preventDefault()

    dispatch(restoreConfig(firstConfig))

  }

  return (
    <div className="navbar">
      <Button href={configUrl} variant="outlined">
        <FindInPageIcon />
      </Button>
      <Typography variant='caption'>view file</Typography>

      <Button onClick={handleBackup}type="submit" variant="outlined">
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
