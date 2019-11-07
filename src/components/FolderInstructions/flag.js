import Typography from '@material-ui/core/Typography'
import React from 'react'

export default function Flag() {
  return (
    <Typography component="div">
      <p>Where can I get a flag made?</p>
      <ul>
        <li>
          <a href="https://www.amazon.com/Anley-Custom-Customized-Flags-Banners/dp/B07H88TPRN">
            Amazon has vendors offering custom flags starting around $12
          </a>
        </li>
        <li>
          <a href="https://www.buildasign.com/flags">
            Build a Sign offers flags starting at $48
          </a>
        </li>
      </ul>
    </Typography>
  )
}
