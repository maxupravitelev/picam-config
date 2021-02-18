// import react modules
import React from 'react'

// init redux and import reducers
import { useSelector } from 'react-redux'

// import components
import UrlForm from './components/UrlForm'
import ConfigList from './components/ConfigList'
import Header from './components/Header'
import Capture from './components/Cam/Capture'
import NavBar from './components/NavBar'

// import css and material ui components
import './App.css'
import Grid from '@material-ui/core/Grid';

// use media query to determine screen size
import useMediaQuery from '@material-ui/core/useMediaQuery'


const App = () => {

  // fetch streamUrl from store to check if setting up url is necessary
  let streamUrl = useSelector((state) => state.urls.streamUrl)

  // determine screen size
  const checkScreenWidth = useMediaQuery('(max-width:600px)');

  // return url form if streamUrl is not set yet
  if (!streamUrl)
    return (
      <Grid container direction="column" alignItems="center" spacing={1} justify="center" >
        <Grid >
          <Header />
        </Grid>
        <Grid >
          <UrlForm />
        </Grid>
      </Grid >
    )

  else {
    // render main app based on screen size
    if (!checkScreenWidth) {
      return (
        <Grid container spacing={2} justify="center" alignItems="center">
          {/* <Grid item xs={12} sm={9} zeroMinWidth>
            <Header />
          </Grid> */}
          <Grid item xs={4} sm={4} zeroMinWidth>
            <Capture />
          </Grid>

          <Grid item xs={4} sm={4} zeroMinWidth>
            <ConfigList />
          </Grid>

          <Grid item xs={4} sm={4} >
            <NavBar />
          </Grid>
        </Grid>
      )
    } else {
      return (
        <div>
          <Capture />
          <ConfigList />
          <NavBar />
        </div>
      )
    }
  }


}

export default App
