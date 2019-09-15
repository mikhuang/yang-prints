import { default as MaterialLink } from '@material-ui/core/Link'
import { Link as RouterLink } from '@reach/router'
import React from 'react'
export { Router } from '@reach/router'

export const AdapterLink = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} {...props} />
))

export function Link(props) {
  return <MaterialLink component={AdapterLink} {...props} />
}
