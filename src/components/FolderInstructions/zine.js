import Typography from '@material-ui/core/Typography'
import React from 'react'

export default function Zine() {
  return (
    <Typography>
      <a href="https://weirdobrigade.com/2018/03/29/how-to-make-an-8-page-mini-zine-my-zine-making-process/">
        Zines are awesome!
      </a>{' '}
      Print them out on regular paper and turn them into booklets like this:
      <br />
      <img
        src="/img/zine-instructions.jpg"
        alt="Instructions on how to make a Zine!"
        style={{ maxWidth: '100%' }}
      />
    </Typography>
  )
}
