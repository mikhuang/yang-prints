import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { ServerStyleSheets } from '@material-ui/styles'
import React from 'react'
import theme from './src/theme'

const muiTheme = createMuiTheme(theme)

export default pluginOptions => ({
  beforeRenderToElement: async (App, { meta }) => {
    meta.muiSheets = new ServerStyleSheets()
    const NewApp = props => {
      return meta.muiSheets.collect(
        <MuiThemeProvider theme={muiTheme}>
          <App {...props} />
        </MuiThemeProvider>
      )
    }
    return NewApp
  },
  headElements: (elements, { meta }) => [
    ...elements,
    meta.muiSheets.getStyleElement(),
  ],
})
