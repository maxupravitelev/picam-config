// import react modules
import React, { useState, useEffect } from 'react'

// init redux and import reducers
import { useDispatch, useSelector } from 'react-redux'
import { initializeConfig } from './reducers/configReducer'


// import components
import UrlForm from './components/UrlForm'
import ConfigList from './components/ConfigList'
import Header from './components/Header'
import Capture from './components/Capture'

// import css and material ui components
import './App.css'

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

  const classes = useStyles();

  let streamUrl = useSelector((state) => state.urls.streamUrl)


  // return url form if stream is not set yet
  if (!streamUrl)
    return (
      <Grid container direction="column" alignItems="center" className={classes.root} spacing={1} justify="center" >
        <Grid >
          <Header />
        </Grid>
        <Grid > 
          <UrlForm />
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
            <Capture streamUrl={streamUrl} />
        </Grid>

        <Grid item xs={6} sm={6} zeroMinWidth>
          <ConfigList config={config} configUrl={configUrl} setConfig={setConfig} />
        </Grid>
      </Grid>
    )
  }
}

export default App
