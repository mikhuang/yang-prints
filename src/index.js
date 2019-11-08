import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
// import * as Sentry from '@sentry/browser'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
// Your top level component
import App from './App'
import theme from './theme'

// Export your top level component as JSX (for static rendering)
export default App

// Sentry.init({
//   dsn: 'https://b44f4615143444b69ed2e4e3ae80e64c@sentry.io/1727642',
// })

// Render your app
if (typeof document !== 'undefined') {
  const target = document.getElementById('root')

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const muiTheme = createMuiTheme(theme)

  const render = Comp => {
    renderMethod(
      <AppContainer>
        <MuiThemeProvider theme={muiTheme}>
          <Comp />
        </MuiThemeProvider>
      </AppContainer>,
      target
    )
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./App', () => {
      render(App)
    })
  }
}
