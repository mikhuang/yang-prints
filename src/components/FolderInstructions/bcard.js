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
              <b>FREE:</b>{' '}
              <Link href="http://4over4.com/printing/Free-Business-Cards">
                4OVER4.COM
              </Link>{' '}
              offers 200 single-sided (they stamp their logo on the back) cards
              with 5 day shipping if you Facebook or Twitter post them. After
              getting started, go to <i>Select A Category</i> >{' '}
              <i>START FROM SCRATCH</i>. The image you choose will need to be a
              JPG or PNG. After tweeting, it took a few refreshes before it let
              me order for free.
            </li>
            <li>
              Cheap: <Link href="https://www.bizay.com/">Bizay.com</Link> is
              around $18 for 4000 double-sided color. Generally considered the
              cheapest, sometimes they have promos. If you can find something
              cheaper than Bizay, you know it's a really good deal.
            </li>
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
