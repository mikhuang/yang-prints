import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import React, { Fragment } from 'react'
import Bcard from './bcard'
import Button from './button'
import Ganged from './ganged'
import Square from './square'
import Sticker from './sticker'
import Zine from './zine'

const InstructionsTitle = () => <Typography variant="caption">TIPS</Typography>

const KEY_TO_COMPONENT_MAPPING = {
  bcard: Bcard,
  sticker: Sticker,
  square: Square,
  ganged: Ganged,
  button: Button,
  zine: Zine,
}
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
  },
}))
/**
 * Show instructions depending on folder and tags
 */
export default function FolderInstructions({ folderKey, tags = [] }) {
  const classes = useStyles()

  const validKeys = []
  const keys = Object.keys(KEY_TO_COMPONENT_MAPPING)
  if (keys.includes(folderKey)) {
    validKeys.push(folderKey)
  }
  tags.forEach(tag => {
    const tagKey = tag.toLowerCase()
    if (keys.includes(tagKey)) {
      validKeys.push(tagKey)
    }
  })

  if (validKeys.length > 0) {
    return (
      <Container className={classes.root}>
        <InstructionsTitle />
        {validKeys.map(key => {
          const Component = KEY_TO_COMPONENT_MAPPING[key]
          return <Component key={key} />
        })}
      </Container>
    )
  }

  return null
}
