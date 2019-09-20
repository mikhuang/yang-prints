import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import React, { Fragment } from 'react'

const InstructionsTitle = () => <Typography variant="caption">TIPS</Typography>

export default function FolderInstructions({ folderKey }) {
  if (folderKey === 'bcard') {
    return (
      <Fragment>
        <InstructionsTitle />
        <Typography component="div">
          <ul>
            <li>These designs are for standard 2 x 3.5" business cards.</li>
            <li>Mix and match fronts and backs!</li>
            <li>
              There are tons of places for cheap printing.
              <ul>
                <li>
                  Next day pickup:{' '}
                  <Link href="https://staples.com">Staples</Link> should be
                  around $25 for 1000 double-sided color. Pick up in store to
                  avoid delivery fees.
                </li>
                <li>
                  Slow but cheap:{' '}
                  <Link href="https://360onlineprint.com">
                    360onlineprint.com
                  </Link>{' '}
                  is around $25 for 4000 cards, with 2 week delivery.
                </li>
                <li>
                  <Link href="https://www.gotprint.com">GotPrint</Link> offers
                  10% off with code <b>YANG2020</b>.
                </li>
                <li>
                  <Link href="https://vistaprint.com">Vistaprint</Link>,{' '}
                  <Link href="https://psprint.com">PsPrint</Link> and tons of
                  other places online tend to be in between, depending on promo.
                </li>
              </ul>
            </li>
            <li>
              These are great for handing out since they're nice and compact.
            </li>
            <li>They can also be slipped anywhere a credit card can go 😅.</li>
          </ul>
        </Typography>
      </Fragment>
    )
  }
  if (folderKey === 'sticker') {
    return (
      <Fragment>
        <InstructionsTitle />
        <Typography component="div">
          <ul>
            <li>
              <Link href="https://bit.ly/PrintYang">
                How to DIY waterproof stickers at home
              </Link>
            </li>
            <li>
              There are places that'll print for a reasonable price:
              <ul>
                <li>
                  <Link href="https://www.stickermule.com">StickerMule</Link>
                </li>
                <li>Just Google It™</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </Fragment>
    )
  }
  if (folderKey === 'square') {
    return (
      <Fragment>
        <InstructionsTitle />
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
              Sticky notes both stick to things and are easy to take. So, you
              know, stick them wisely or whatever.
            </li>
          </ul>
        </Typography>
      </Fragment>
    )
  }
  if (folderKey === 'button') {
    return (
      <Fragment>
        <InstructionsTitle />
        <Typography component="div">
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
              . If you're okay with slower shipping, you can get 1000 for around
              $115 from{' '}
              <Link href="https://www.americanbuttonmachines.com/products/2-25-pinback-button-set">
                American Button Machines
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
            <li>
              Buttons are great for encouraging email signups, people to donate
              to Yang2020 on their phones, or to promise to talk to their
              parents about Yang.
            </li>
          </ul>
        </Typography>
      </Fragment>
    )
  }

  return null
}
