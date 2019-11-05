import React from 'react'
import Box from '@material-ui/core/Box'
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box p={4}>
          <h1>Something went wrong. Please refresh and try again.</h1>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
