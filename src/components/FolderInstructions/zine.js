import Typography from '@material-ui/core/Typography'
import React from 'react'
import zineInstructions from './zine-instructions.jpg'

export default function Zine() {
  return (
    <Typography>
      This design is a zine! Print it out on regular paper and turn it into a
      booklet like this:
      <br />
      <img
        src={zineInstructions}
        alt="Instructions on how to make a Zine!"
        style={{ maxWidth: '100%' }}
      />
    </Typography>
  )
}
