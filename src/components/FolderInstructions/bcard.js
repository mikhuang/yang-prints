import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import React from 'react'

export default function Bcard() {
  return (
    <Typography component="div">
      <ul>
        <li>These designs are for standard 2 x 3.5" business cards.</li>
        <li>Mix and match fronts and backs!</li>
        <li>
          There are tons of places for cheap printing.
          <ul>
            <li>
              Next day pickup: <Link href="https://staples.com">Staples</Link>{' '}
              should be around $25 for 1000 double-sided color. Pick up in store
              to avoid delivery fees.
            </li>
            <li>
              Slow but cheap:{' '}
              <Link href="https://360onlineprint.com">360onlineprint.com</Link>{' '}
              is around $25 for 4000 cards, with 2 week delivery.
            </li>
            <li>
              <Link href="https://www.gotprint.com">GotPrint</Link> offers 10%
              off with code <b>YANG2020</b>.
            </li>
            <li>
              <Link href="https://vistaprint.com">Vistaprint</Link>,{' '}
              <Link href="https://psprint.com">PsPrint</Link> and tons of other
              places online tend to be in between, depending on promo.
            </li>
          </ul>
        </li>
        <li>These are great for handing out since they're nice and compact.</li>
        <li>They can also be slipped anywhere a credit card can go 😅.</li>
      </ul>
    </Typography>
  )
}
