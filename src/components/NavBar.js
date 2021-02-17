import React from 'react'

import { Button, Typography } from '@material-ui/core'

import RestoreIcon from '@material-ui/icons/Restore';
import SendIcon from '@material-ui/icons/Send';

const NavBar = ({  }) => {

  
  return (
    <div className="navbar">
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
