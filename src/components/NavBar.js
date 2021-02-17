import React from 'react'

import { Button, Typography } from '@material-ui/core'

import RestoreIcon from '@material-ui/icons/Restore';
import SendIcon from '@material-ui/icons/Send';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import { useSelector } from 'react-redux'

const NavBar = ({ }) => {
  
  let configUrl = useSelector((state) => state.urls.configUrl)

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
      <Button type="submit" variant="outlined">
        <SendIcon />
      </Button>
      <Typography variant='caption'>send</Typography>

    </div>
  )
}

export default NavBar
