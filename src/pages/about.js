import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Title from '../components/Title'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    maxWidth: 600,
  },
}))
export default () => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Title gutterBottom variant="h4">
        FAQ
      </Title>
      <Box mb={3}>
        <Typography gutterBottom variant="h6">
          How do I get started?
        </Typography>
        <Typography gutterBottom>
          If you're printing from home, just download files and try printing
          them out. For an awesome guide, check out{' '}
          <Link href="http://bit.ly/PrintLikeAYangster">
            How to Print Like A Yangster
          </Link>
          .
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography gutterBottom variant="h6">
          I want to make something. Where do I get logos, photos, fonts, etc?
        </Typography>
        <Typography gutterBottom>
          <ul>
            <li>
              <Link href="https://drive.google.com/drive/folders/1W3Gzd6rzV0BnoBXgf3mA59dJORc1aE2n">
                Official media/press kit for logos and photos
              </Link>
            </li>
            <li>
              <Link href="https://drive.google.com/drive/folders/1bBXFz6LEscDbDafELmcsw3pSa-hYjQw7">
                Official graphics folder
              </Link>
            </li>
            <li>
              <Link href="https://fonts.google.com/specimen/Montserrat">
                Montserrat font
              </Link>
            </li>
          </ul>
        </Typography>
      </Box>
    </Container>
  )
}
