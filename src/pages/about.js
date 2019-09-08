import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import React from 'react'

export default () => (
  <Container>
    <Box mt={3}>
      <Typography gutterBottom variant="h4">
        About
      </Typography>
      <Typography gutterBottom>
        Posters, flyers, stickers, and other print material can be a great way
        to get people into Andrew Yang. Hopefully this site makes that process
        easier.
      </Typography>
      <br />
      <Typography gutterBottom>
        Got something to share? Have a correction? Please contact Michael at{' '}
        <a href="mailto:m@mikhuang.com?subject=YangPrints">m@mikhuang.com</a>
      </Typography>
    </Box>
  </Container>
)
