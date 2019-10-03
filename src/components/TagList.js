import Typography from '@material-ui/core/Typography'
import React, { Fragment } from 'react'
import { Link } from './Router'

/**
 * Show list of tags
 */
export default function TagList({ tags, tagCounts, ...otherProps }) {
  const filteredTags = tagCounts
    ? tags.filter(x => Object.keys(tagCounts).includes(x.tag))
    : tags
  if (filteredTags.length === 0) {
    return null
  }
  return (
    <Typography {...otherProps}>
      {filteredTags.map((tag, idx) => {
        const link = (
          <Link to={tag.url} key={tag.title}>
            {tag.title}
          </Link>
        )
        if (idx === 0) {
          return link
        }
        return <Fragment key={tag.title}>, {link}</Fragment>
      })}
    </Typography>
  )
}
