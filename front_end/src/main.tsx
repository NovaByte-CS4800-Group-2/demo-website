import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.css'  // css library 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 
// render the commopent tree inside the element with the ID root
// React.StrictMode is a tool for highlighting potential problems in an application
// It activates additional checks and warnings for its descendants