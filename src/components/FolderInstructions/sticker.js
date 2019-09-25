import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import React from 'react'

export default function Sticker() {
  return (
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
  )
}
