import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/* Import the typography CSS file. */
import './css/vars.css'
import './css/typography.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
