import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from 'components/Navbar'
import { Router } from 'components/Router'
import React from 'react'
import { Root, Routes } from 'react-static'
import './app.css'

function App() {
  return (
    <Root>
      <CssBaseline />
      <Navbar />
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  )
}

export default App
