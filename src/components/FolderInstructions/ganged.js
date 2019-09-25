import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import React from 'react'

export default function Ganged() {
  return (
    <Typography>
      These files are{' '}
      <Link href="https://en.wikipedia.org/wiki/Gang_run_printing">
        &ldquo;ganged&rdquo;
      </Link>{' '}
      together so you can print many at a time, then cut them apart for usage.
    </Typography>
  )
}
