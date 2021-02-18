// init react
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// import "./index.css";

// init material ui
import Container from '@material-ui/core/Container'

// init redux
import { Provider } from 'react-redux'
import store from './store'



ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store} >
    <Container
    // maxWidth="false"
    >
      <App />
    </Container>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
)
