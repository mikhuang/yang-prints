import Typography from '@material-ui/core/Typography'
import React, { Fragment } from 'react'

import { Link } from '../components/Router'

/**
 * Show list of tags
 */
export default function MaterialTags({ material, ...otherProps }) {
  if (material.tagEntities.length === 0) {
    return null
  }
  return (
    <Typography {...otherProps}>
      {material.tagEntities.map((tag, idx) => {
        const link = <Link to={tag.url}>{tag.title}</Link>
        if (idx === 0) {
          return link
        }
        return <Fragment key={tag}>, {link}</Fragment>
      })}
    </Typography>
  )
}
