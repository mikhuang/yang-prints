import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import React, { Fragment, useState } from 'react'
import { Link } from '../components/Router'

import Box from '@material-ui/core/Box'
import cx from 'clsx'
import groupBy from 'lodash/groupBy'
import { useRouteData } from 'react-static'
import { MATERIAL_FOLDERS, toMaterialEntity } from '../entities/Material'

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
