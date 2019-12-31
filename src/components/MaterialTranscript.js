import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'

/**
 * Show list of tags
 */
export default function TagList({ material }) {
  const { transcription } = material
  const [open, setOpen] = useState(false)
  if (!transcription) {
    return null
  }
  return (
    <div>
      <Typography variant="caption">
        <Link
          href="#"
          onClick={e => {
            e.preventDefault()
            setOpen(!open)
          }}
        >
          {open ? 'Hide' : 'Show'} Transcription
        </Link>
      </Typography>

      <Typography
        style={{
          marginTop: '1em',
          whiteSpace: 'pre-line',
          display: open ? 'block' : 'none',
        }}
      >
        {transcription}
      </Typography>
    </div>
  )
}
