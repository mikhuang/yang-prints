import { makeStyles } from '@material-ui/core/styles'
import cx from 'clsx'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
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
    maxWidth: zoom * 125,
    [theme.breakpoints.up('sm')]: {
      maxHeight: zoom * 350,
      maxWidth: zoom * 350,
    },
  }),
  'material-sized-bcard': ({ zoom }) => ({
    maxHeight: zoom * 80,
    maxWidth: zoom * 80,
    [theme.breakpoints.up('sm')]: {
      maxHeight: zoom * 150,
      maxWidth: zoom * 150,
    },
  }),
  'material-sized-square': ({ zoom }) => ({
    maxWidth: zoom * 70,
    [theme.breakpoints.up('sm')]: {
      maxWidth: zoom * 190,
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
      maxHeight: zoom * 130,
      maxWidth: zoom * 130,
    },
  }),
  placeholder: {
    minHeight: 200,
  },
  materialLink: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: theme.spacing(0.25),
    left: theme.spacing(0.25),
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: theme.spacing(0, 0.5),
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.secondary.contrastText}`,
  },
}))

export default function MaterialThumb({
  material,
  sized = true,
  zoom = 1,
  className = '',
  linkClassName = '',
  lazy = true,
  scrollPosition,
  badge = true,
}) {
  const classes = useStyles({ zoom })
  const Component = lazy ? LazyLoadImage : 'img'
  const addlImgProps = {}
  if (scrollPosition && lazy) {
    addlImgProps.scrollPosition = scrollPosition
  }

  if (lazy) {
    addlImgProps.placeholder = <div className={classes.placeholder} />
  }

  const img = (
    <Component
      className={cx(className, classes.material, {
        [classes[`material-sized-${material.folderId}`]]: sized,
        [classes['material-sized']]: sized,
        [classes['round']]: material.isRound,
      })}
      src={material.thumbSrc}
      alt={material.slug}
      {...addlImgProps}
    />
  )

  return (
    <Link
      key={material.url}
      to={material.url}
      className={cx(classes.materialLink, linkClassName)}
    >
      {img}
      {badge && material.badge && (
        <Typography variant="caption" className={classes.badge}>
          {material.badge}
        </Typography>
      )}
    </Link>
  )
}
