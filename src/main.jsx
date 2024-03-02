import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import { Ripple } from 'primereact/ripple';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App Ripple={Ripple}/>
  </React.StrictMode>,
)
