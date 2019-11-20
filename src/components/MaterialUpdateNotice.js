import Button from '@material-ui/core/Button'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import React from 'react'
import { AdapterLink } from './Router'

/**
 * Show link to new version of a material
 */
export default function MaterialUpdateNotice({ material }) {
  if (material.replacedBy === '/') {
    // don't bother showing for hidden
    return null
  }
  return (
    <SnackbarContent
      message={<span>This material has been updated.</span>}
      action={
        <Button
          color="secondary"
          component={AdapterLink}
          to={material.replacedBy}
        >
          View new version
        </Button>
      }
    />
  )
}
