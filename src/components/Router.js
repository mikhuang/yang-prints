import { default as MaterialLink } from '@material-ui/core/Link'
import { Link as RouterLink } from '@reach/router'
import React from 'react'
export { Router } from '@reach/router'

export function Link(props) {
  return <MaterialLink component={RouterLink} {...props} />
}
