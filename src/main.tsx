import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ToastContainer } from 'react-toastify';

import './index.css'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ToastContainer autoClose={1800} position="top-right"/>
  </React.StrictMode>,
)
