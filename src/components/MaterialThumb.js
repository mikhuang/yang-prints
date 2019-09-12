import { makeStyles } from '@material-ui/core/styles'
import cx from 'clsx'
import React from 'react'
import { Link } from '../components/Router'

const useStyles = makeStyles(theme => ({
  material: ({ zoom }) => ({
    boxShadow: '0 0.15em 0.25em rgba(0,0,0,.5)',
    transition: 'box-shadow .25s',
    maxWidth: '100%',
    '&:hover': {
      boxShadow: '0 0.15em 0.4em rgba(0,0,0,.65)',
    },
  }),
  'material-sized': ({ zoom }) => ({
    maxHeight: zoom * 100,
    maxWidth: zoom * 100,
    [theme.breakpoints.up('sm')]: {
      maxHeight: zoom * 250,
      maxWidth: zoom * 250,
    },
  }),
  'material-sized-poster': ({ zoom }) => ({
    maxHeight: zoom * 125,
    maxWidth: zoom * 100,
    [theme.breakpoints.up('sm')]: {
      maxHeight: zoom * 350,
      maxWidth: zoom * 250,
    },
  }),
  'material-sized-bcard': ({ zoom }) => ({
    maxHeight: zoom * 50,
    maxWidth: zoom * 50,
    [theme.breakpoints.up('sm')]: {
      maxHeight: zoom * 150,
      maxWidth: zoom * 150,
    },
  }),
  'material-sized-square': ({ zoom }) => ({
    maxWidth: zoom * 60,
    [theme.breakpoints.up('sm')]: {
      maxWidth: zoom * 170,
    },
  }),
  'material-sized-sticker': ({ zoom }) => ({
    maxHeight: zoom * 70,
    maxWidth: zoom * 70,
    [theme.breakpoints.up('sm')]: {
      maxHeight: zoom * 170,
      maxWidth: zoom * 170,
    },
  }),
  'material-sized-banner': ({ zoom }) => ({
    maxHeight: zoom * 250,
    maxWidth: zoom * 250,
    [theme.breakpoints.up('sm')]: {
      maxHeight: zoom * 350,
      maxWidth: zoom * 350,
    },
  }),
  round: { borderRadius: 1000 },
  'material-sized-button': ({ zoom }) => ({
    maxHeight: zoom * 80,
    maxWidth: zoom * 80,
    [theme.breakpoints.up('sm')]: {
      maxHeight: zoom * 150,
      maxWidth: zoom * 150,
    },
  }),
}))

export default function MaterialThumb({
  material,
  sized = true,
  zoom = 1,
  className = '',
  linkClassName = '',
}) {
  const classes = useStyles({ zoom })
  return (
    <Link key={material.url} to={material.url} className={linkClassName}>
      <img
        className={cx(className, classes.material, {
          [classes[`material-sized-${material.folderId}`]]: sized,
          [classes['material-sized']]: sized,
          [classes['round']]: material.isRound,
        })}
        src={material.thumbSrc}
        alt={material.slug}
      />
    </Link>
  )
}
