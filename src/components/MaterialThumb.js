import { makeStyles } from '@material-ui/core/styles'
import cx from 'clsx'
import React from 'react'
import { Link } from '../components/Router'

const useStyles = makeStyles(theme => ({
  material: ({ zoom }) => ({
    boxShadow: '0 0.15em 0.25em rgba(0,0,0,.5)',
    maxHeight: zoom * 100,
    maxWidth: zoom * 100,
    transition: 'box-shadow .25s',
    '&:hover': {
      boxShadow: '0 0.15em 0.4em rgba(0,0,0,.65)',
    },
    [theme.breakpoints.up('sm')]: {
      maxHeight: zoom * 250,
      maxWidth: zoom * 250,
    },
  }),
  'material-poster': ({ zoom }) => ({
    maxHeight: zoom * 125,
    maxWidth: zoom * 100,
    [theme.breakpoints.up('sm')]: {
      maxHeight: zoom * 350,
      maxWidth: zoom * 250,
    },
  }),
  'material-bcard': ({ zoom }) => ({
    maxHeight: zoom * 50,
    maxWidth: zoom * 50,
    [theme.breakpoints.up('sm')]: {
      maxHeight: zoom * 150,
      maxWidth: zoom * 150,
    },
  }),
  'material-square': ({ zoom }) => ({
    maxHeight: zoom * 60,
    [theme.breakpoints.up('sm')]: {
      maxHeight: zoom * 170,
    },
  }),
}))

export default function MaterialThumb({ material, zoom = 1, className = '' }) {
  const classes = useStyles({ zoom })
  return (
    <Link key={material.url} to={material.url}>
      <img
        className={cx(className, classes.material, {
          [classes[`material-${material.folder}`]]: true,
        })}
        src={material.thumbSrc}
        alt={material.slug}
      />
    </Link>
  )
}
