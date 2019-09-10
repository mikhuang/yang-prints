import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Location } from '@reach/router'
import Navbar from 'components/Navbar'
import { Router } from 'components/Router'
import React from 'react'
import { Head, Root, Routes } from 'react-static'
import Analytics from './Analytics'
import './app.css'

function App(props) {
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
      <Location>{({ location }) => <Analytics location={location} />}</Location>
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
