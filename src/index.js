import React from 'react'
import ReactDOM from 'react-dom'
import { App, ThemeProvider } from './Component'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
