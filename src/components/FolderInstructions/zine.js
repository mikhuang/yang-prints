import Typography from '@material-ui/core/Typography'
import React from 'react'

export default function Zine() {
  return (
    <Typography>
      This design is a zine! Print it out on regular paper and turn it into a
      booklet like this:
      <br />
      <img
        src="/img/zine-instructions.jpg"
        alt="Instructions on how to make a Zine!"
        style={{ maxWidth: '100%' }}
      />
    </Typography>
  )
}
