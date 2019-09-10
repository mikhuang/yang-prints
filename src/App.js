import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from 'components/Navbar'
import { Router } from 'components/Router'
import React from 'react'
import { Root, Routes, Head } from 'react-static'
import './app.css'
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'

function App() {
  return (
    <Root>
      <Head>
        <meta charSet="UTF-8" />
        <title>YangPrints - Andrew Yang 2020 Print materials</title>
        <meta
          name="description"
          content="Andrew Yang 2020 posters, handouts, flyers, sticker templates to
          download and print."
        />
      </Head>
      <CssBaseline />
      <Navbar />
      <React.Suspense
        fallback={
          <Box p={3} textAlign="center">
            <CircularProgress />
          </Box>
        }
      >
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  )
}

export default App
