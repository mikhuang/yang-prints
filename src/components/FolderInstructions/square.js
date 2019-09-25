import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import React from 'react'

export default function Square() {
  return (
    <Typography component="div">
      <ul>
        <li>These designs are great for sticky notes.</li>
        <li>
          <Link href="https://learninginhand.com/blog/print-custom-sticky-notes-with-google-slides">
            Sticky notes can be printed DIY at home
          </Link>{' '}
          with some manual labor.
        </li>
        <li>
          There are places that'll print for a reasonable price:
          <ul>
            <li>
              <Link href="https://www.vistaprint.com/stationery/sticky-notes/">
                VistaPrint
              </Link>
            </li>
            <li>Just Google It™</li>
          </ul>
        </li>
        <li>
          Sticky notes both stick to things and are easy to take. So, you know,
          stick them wisely or whatever.
        </li>
      </ul>
    </Typography>
  )
}
