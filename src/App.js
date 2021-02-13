import './App.css'
import React, { useState } from 'react'

// import components
import UrlForm from './components/UrlForm'
import ConfigList from './components/ConfigList'
import Header from './components/Header'
import Capture from './components/Capture'

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   height: 140,
  //   width: 100,
  // },
  // control: {
  //   padding: theme.spacing(2),
  // },
}));

const App = () => {
  const [config, setConfig] = useState(null)
  const [configUrl, setConfigUrl] = useState('')
  const [streamUrl, setStreamUrl] = useState('')
  const [positionUrl, setPositionUrl] = useState('')

  const classes = useStyles();

  const getStreamUrlFromForm = (urls, configJson) => {
    setConfigUrl(urls.configUrl)
    setStreamUrl(urls.streamUrl)
    setPositionUrl(urls.positionUrl)
    setConfig(configJson)
  }

  // return url form if stream is not set yet
  if (!streamUrl)
    return (
      <Grid container direction="column" alignItems="center" className={classes.root} spacing={1} justify="center" >
        <Grid  zeroMinWidth>
          <Header />
        </Grid>
        <Grid  zeroMinWidth> 
          <UrlForm getStreamUrlFromForm={getStreamUrlFromForm} />
        </Grid>
      </Grid >
    )

  else {
    return (
      <Grid container className={classes.root} spacing={2} justify="center" alignItems="center">
        {/* <Grid item xs={12} sm={9} zeroMinWidth>
          <Header />
        </Grid> */}
        <Grid item xs={6} sm={6} zeroMinWidth>
            <Capture streamUrl={streamUrl} positionUrl={positionUrl} />
        </Grid>

        <Grid item xs={6} sm={6} zeroMinWidth>
          <ConfigList config={config} configUrl={configUrl} setConfig={setConfig} />
        </Grid>
      </Grid>
    )
  }
}

export default App
