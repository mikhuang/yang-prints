import React, { Fragment } from 'react'
import { useRouteData } from 'react-static'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Button from '@material-ui/core/Button'
import { default as MaterialLink } from '@material-ui/core/Link'
import MaterialThumb from '../components/MaterialThumb'
import SaveAltSharpIcon from '@material-ui/icons/SaveAltSharp'
import { Link as RouterLink } from '@reach/router'

export default () => (
  <Container>
    <Box mt={3}>
      <Typography gutterBottom variant="h4">
        About
      </Typography>
      <Typography>
        Posters, flyers, stickers, and other print material can be a great way
        to get people into Andrew Yang. Here's a place to easily find, download,
        and submit new stuff.
      </Typography>
    </Box>
  </Container>
)
