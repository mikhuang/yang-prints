import Typography from '@material-ui/core/Typography'
import React from 'react'

export default function Zine() {
  return (
    <Typography>
      Zines are awesome! Print them out on regular paper and turn them into
      booklets like this:
      <br />
      <img
        src="/img/zine-instructions.jpg"
        alt="Instructions on how to make a Zine!"
        style={{ maxWidth: '100%' }}
      />
    </Typography>
  )
}
