import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Location } from '@reach/router'
import React from 'react'
import { Head, Root, Routes } from 'react-static'
import Analytics from './Analytics'
import './app.css'
import Footer from './components/Footer'
import ManageScroll from './components/ManageScroll'
import Navbar from './components/Navbar'
import { Router } from './components/Router'
import ErrorBoundary from './ErrorBoundary'

function App() {
  return (
    <Root>
      <Head>
        <meta charSet="UTF-8" />
        <title>YangPrints - Andrew Yang 2020 Print materials</title>
        <meta
          name="description"
          content="Andrew Yang 2020 posters, handouts, flyers, sticker templates to
          download and print. Promote Yang2020 fast, just grab and go, go, go!"
        />
      </Head>
      <CssBaseline />
      <ManageScroll />
      <Location>{({ location }) => <Analytics location={location} />}</Location>
      <Navbar />
      <ErrorBoundary>
        <React.Suspense
          fallback={
            <Box p={3} textAlign="center">
              <CircularProgress />
            </Box>
          }
        >
          <Router primary={false}>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </ErrorBoundary>
      <Footer />
    </Root>
  )
}

export default App
