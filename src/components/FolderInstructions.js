import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import React, { Fragment } from 'react'

export default function FolderInstructions({ folderKey }) {
  if (folderKey === 'button') {
    return (
      <Fragment>
        <Typography variant="caption2">Instructions</Typography>
        <Typography>
          <ul>
            <li>
              These designs make 2.25" buttons. They include the necessary
              margin around the art (the part that gets squished).
            </li>
            <li>
              <Link href="https://www.wikihow.com/Make-a-Button-Pin">
                WikiHow's button making overview
              </Link>{' '}
              is pretty good.
            </li>
            <li>
              Button parts are available on Amazon at{' '}
              <Link href="https://www.amazon.com/Neil-Enterprises-Button-Parts-Machine/dp/B0042ST1B0/ref=sr_1_1?keywords=2.25+button+500&qid=1568440383&s=gateway&sr=8-1">
                $100 for 500 buttons
              </Link>
              .
            </li>
            <li>
              Button presses can often be borrowed (check with elementary school
              teachers and politically active folks).
            </li>
            <li>
              Alternatively, there are{' '}
              <Link href="https://www.speedybuttons.com/shop/pin-back-buttons-sale/round-custom-campaign-buttons/round-cheap-buttons">
                many places to get buttons made online
              </Link>
              .
            </li>
          </ul>
        </Typography>
      </Fragment>
    )
  }

  return null
}
