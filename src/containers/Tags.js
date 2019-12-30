import Badge from '@material-ui/core/Badge'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React, { Fragment } from 'react'
import { Head, useSiteData } from 'react-static'
import { AdapterLink } from '../components/Router'
import Title from '../components/Title'
import Tag from '../entities/Tag'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1, 1.5),
  },
}))

export default function Tags() {
  const isLarge = useMediaQuery('(min-width:600px)')
  const { tagCounts } = useSiteData()
  const classes = useStyles()
  const [showSingles, setShowSingles] = React.useState(false)
  function alphabeticalSorter(a, b) {
    return a > b ? 1 : -1
  }
  return (
    <Fragment>
      <Head>
        <title>YangPrints Tags</title>
      </Head>
      <Box p={isLarge ? 5 : 1} mt={1}>
        <Title align="center" variant={isLarge ? 'h2' : 'h4'}>
          Tags
        </Title>
        <Box my={4}>
          {Object.keys(tagCounts)
            .sort(alphabeticalSorter)
            .map(tag => {
              const count = tagCounts[tag]
              const tagEntity = new Tag(tag)
              if (!showSingles && count < 2) {
                return null
              }
              return (
                <Badge
                  className={classes.button}
                  key={tag}
                  color="secondary"
                  badgeContent={count}
                >
                  <Button
                    variant="outlined"
                    component={AdapterLink}
                    to={tagEntity.url}
                  >
                    {tagEntity.title}
                  </Button>
                </Badge>
              )
            })}
          <Button onClick={() => setShowSingles(true)}>
            Show singleton tags
          </Button>
        </Box>
      </Box>
    </Fragment>
  )
}
