import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
export default () => (
  <Container>
    <Box textAlign="center" my={5}>
      <Typography variant="h3">
        404 - Sorry, we couldn't find that page.
      </Typography>
    </Box>
  </Container>
)
