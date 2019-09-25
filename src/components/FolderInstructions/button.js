import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import React from 'react'

export default function Button() {
  return (
    <Typography component="div">
      <ul>
        <li>
          These designs make 2.25" buttons. They include the necessary margin
          around the art (the part that gets squished).
        </li>
        <li>
          <Link href="https://www.wikihow.com/Make-a-Button-Pin">
            WikiHow's button making overview
          </Link>{' '}
          is pretty good.
        </li>
        <li>
          <Link href="http://thebuttonguy.net">The Button Guy</Link> is okay for
          information but he is like totally bought off by the store{' '}
          <Link href="https://peoplepowerpress.org">People Power Press</Link>{' '}
          (who are also fine)
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
          <Link href="https://www.amazon.com/Mophorn-Button-Machine-Circle-1000pcs/dp/B07DL5JNXM/">
            Cheap button presses on Amazon (~$140, comes with 1000 button parts)
          </Link>{' '}
          more or less work but some of them have backs that are made of
          plastic, if you care about that sort of thing. Also, parts might be
          specific to that machine.
        </li>
        <li>
          Alternatively, there are{' '}
          <Link href="https://www.speedybuttons.com/shop/pin-back-buttons-sale/round-custom-campaign-buttons/round-cheap-buttons">
            many places to get buttons made online
          </Link>
          .
        </li>
        <li>
          Buttons are great for encouraging email signups, people to donate to
          Yang2020 on their phones, or to promise to talk to their parents about
          Yang.
        </li>
      </ul>
    </Typography>
  )
}
