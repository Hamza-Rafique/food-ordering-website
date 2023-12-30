import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import appStore from './utils/appStore.js'
import ScrolltoTop from './utils/ScrolltoTop.js'
import "./css/index.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <Router>
      <React.StrictMode>
        <ScrolltoTop />
        <App />
      </React.StrictMode>,
    </Router>
  </Provider>
)
