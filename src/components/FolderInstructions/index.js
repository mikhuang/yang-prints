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
  ZINE: Zine,
}

/**
 * Show instructions depending on folder and tags
 */
export default function FolderInstructions({ folderKey, tags = [] }) {
  const validKeys = []
  const keys = Object.keys(KEY_TO_COMPONENT_MAPPING)
  if (keys.includes(folderKey)) {
    validKeys.push(folderKey)
  }
  tags.forEach(tag => {
    if (keys.includes(tag)) {
      validKeys.push(tag)
    }
  })

  if (validKeys.length > 0) {
    return (
      <Fragment>
        <InstructionsTitle />
        {validKeys.map(key => {
          const Component = KEY_TO_COMPONENT_MAPPING[key]
          return <Component key={key} />
        })}
      </Fragment>
    )
  }

  return null
}
