// import react & redux
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { restoreConfig } from '../reducers/configReducer'

// import material ui components
import { Button, Typography } from '@material-ui/core'
import RestoreIcon from '@material-ui/icons/Restore';
import SendIcon from '@material-ui/icons/Send';
import FindInPageIcon from '@material-ui/icons/FindInPage';

// import backend service
import configService from '../services/config'

// use media query to determine screen size
import useMediaQuery from '@material-ui/core/useMediaQuery'

// return navigation component
const NavBar = ({ }) => {

  // determine screen size
  const checkScreenWidth = useMediaQuery('(max-width:600px)');

  let urls = useSelector(state => state.urls)

  let counter = useSelector((state) => state.config.length)
  let config = useSelector((state) => state.config[counter - 1])
  const firstConfig = useSelector((state) => state.config[0])
  // console.log(firstConfig)
  let configUrl = useSelector((state) => state.urls.configUrl)

  const dispatch = useDispatch()

  const handleSend = (e) => {
    e.preventDefault()

    if (urls.configUrl != 'dummy_config') {
      configService.setConfig(configUrl, config)

    }
  }

  const handleBackup = (e) => {
    e.preventDefault()

    // Source for clearing input fields: https://www.freecodecamp.org/news/how-to-clear-input-values-of-dynamic-form-in-react/
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = "")
    );
    dispatch(restoreConfig(firstConfig))

  }

  if (!checkScreenWidth) {
    return (
      <div className="navbar">
        <Button href={configUrl} variant="outlined">
          <FindInPageIcon />
        </Button>
        <Typography variant='caption'>view file</Typography>
        {/* <Button onClick={handleBackup}type="submit" variant="outlined">
          <RestoreIcon />
        </Button> */}
        {/* <Typography variant='caption'>restore</Typography> */}
        <Button onClick={handleSend} type="submit" variant="outlined">
          <SendIcon />
        </Button>
        <Typography variant='caption'>send</Typography>

      </div>
    )
  }
  else {
    return (
      <div className="navbar">
        <table>
        <tbody>
          <tr>
            <td>
              <Button href={configUrl} variant="outlined">
                <FindInPageIcon />
              </Button>
            </td>
            <td>
              <Button onClick={handleSend} type="submit" variant="outlined">
                <SendIcon />
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Typography variant='caption'>view file</Typography>
            </td>
            <td>
              <Typography variant='caption'>send</Typography>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default NavBar
