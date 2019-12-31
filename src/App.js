import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Location } from '@reach/router'
import React from 'react'
import { Helmet } from 'react-helmet'
import Analytics from './Analytics'
import './app.css'
import Footer from './components/Footer'
import ManageScroll from './components/ManageScroll'
import Navbar from './components/Navbar'
import { Router } from './components/Router'
import ErrorBoundary from './ErrorBoundary'

import IndexPage from './pages/index'
import NotFoundPage from './pages/404'
import AboutPage from './pages/about'
import AllContainer from './containers/All'
import FolderContainer from './containers/Folder'
import MaterialContainer from './containers/Material'
import TagContainer from './containers/Tag'
import TagsContainer from './containers/Tags'

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>YangPrints - Andrew Yang 2020 Print materials</title>
        <meta
          name="description"
          content="Andrew Yang 2020 posters, handouts, flyers, sticker templates to
          download and print. Promote Yang2020 fast, just grab and go, go, go!"
        />
      </Helmet>
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
          <Router>
            <NotFoundPage default />
            <IndexPage path="/" />
            <AboutPage path="/about" />
            <AllContainer path="/all" />
            <FolderContainer path="/:folderSlug" />
            <MaterialContainer path="/:folderSlug/:materialSlug" />
            <TagContainer path="/tags/:tagSlug" />
            <TagsContainer path="/tags" />
          </Router>
        </React.Suspense>
      </ErrorBoundary>
      <Footer />
    </>
  )
}

export default App
