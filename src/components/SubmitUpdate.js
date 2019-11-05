import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import React from 'react'

/**
 * Show list of tags
 * <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdRUDCwMzof14qp4mKYtv55ZzdkDsgcxSiRMLloZ0adGwvMtg/viewform?embedded=true&usp=pp_url&entry.2085137922=path&entry.1766080520=title&entry.1527464278=description&entry.53038913=tags&entry.115847501=transcription" width="640" height="1440" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
 * https://docs.google.com/forms/d/e/1FAIpQLSdRUDCwMzof14qp4mKYtv55ZzdkDsgcxSiRMLloZ0adGwvMtg/viewform?usp=pp_url&entry.2085137922=path&entry.1766080520=title&entry.1527464278=description&entry.53038913=tags&entry.115847501=transcription
 */
export default function SubmitUpdate({ material }) {
  // TODO: consider modal or other thing
  return (
    <Typography variant="caption">
      <Link href={material.editURL} rel="noreferrer noopener" target="_blank">
        Suggest Edits
      </Link>
    </Typography>
  )
}
