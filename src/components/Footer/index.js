import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Title from '../../components/Title'
import FooterTagsWrapper from './FooterTagsWrapper'
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    maxWidth: 600,
  },
}))

export default function Navbar() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Title gutterBottom variant="h5">
        About
      </Title>
      <Typography gutterBottom>
        YangPrints offers easily printable files that get people interested in
        Andrew Yang for President.
      </Typography>
      <br />
      <Typography gutterBottom>
        <em>Have Yang2020 materials to add?</em>
      </Typography>
      <Box my={3}>
        <Button
          component="a"
          size="large"
          variant="contained"
          color="secondary"
          href="https://docs.google.com/forms/d/e/1FAIpQLScXpMlyNSyvsZSy4S1FkS9Uk_TOfACN-7sjHCxkbQ1L9ZxKpA/viewform"
        >
          Submit Materials
        </Button>
      </Box>
      <FooterTagsWrapper />
      <Typography gutterBottom variant="caption">
        All artwork is property of their creators. Personal use only (which
        means print out as many as you possibly can and give it to as many
        people as possible so that Andrew Yang wins). Cannot be sold or put on
        merchandise for profit. This website is not affiliated with the official
        Yang2020 campaign. The official website for Yang2020 can be found at{' '}
        <Link href="https://yang2020.com">yang2020.com</Link>.
      </Typography>
    </Container>
  )
}
