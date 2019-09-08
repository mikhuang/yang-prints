import Typography from '@material-ui/core/Typography'
import { Link } from 'components/Router'
import groupBy from 'lodash/groupBy'
import React from 'react'
import { useRouteData } from 'react-static'
import { MATERIAL_FOLDERS, toMaterialEntity } from '../entities/Material'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import cx from 'clsx'
const useStyles = makeStyles(theme => ({
  row: {},
  rowInner: {
    overflow: 'hidden',
    overflowX: 'scroll',
    display: 'flex',
    alignItems: 'center',
    '&::-webkit-scrollbar': {
      '-webkit-appearance': 'none',
      height: theme.spacing(1.5),
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: theme.spacing(1),
      backgroundColor: 'rgba(0,0,0,.5)',
      '-webkit-box-shadow': '0 0 1px rgba(255,255,255,.5)',
    },
  },
  media: {
    boxShadow: '0 0 0.5em rgba(0,0,0,.5)',
    margin: theme.spacing(2),
    maxHeight: 200,
    maxWidth: 200,
    [theme.breakpoints.up('sm')]: {
      maxHeight: 250,
      maxWidth: 250,
    },
  },
  'media-poster': {
    maxHeight: 250,
    maxWidth: 200,
    [theme.breakpoints.up('sm')]: {
      maxHeight: 350,
      maxWidth: 250,
    },
  },
  'media-bcard': {
    maxHeight: 100,
    maxWidth: 100,
    [theme.breakpoints.up('sm')]: {
      maxHeight: 150,
      maxWidth: 150,
    },
  },
  'media-square': {
    maxHeight: 120,
    [theme.breakpoints.up('sm')]: {
      maxHeight: 170,
    },
  },
}))
export default () => {
  const classes = useStyles()

  const { materials: materialsData } = useRouteData()
  const materials = toMaterialEntity(materialsData)
  const materialsByFolder = groupBy(materials, 'folder')

  return (
    <div>
      {Object.keys(MATERIAL_FOLDERS).map(folderKey => {
        const folder = MATERIAL_FOLDERS[folderKey]
        const folderMaterials = materialsByFolder[folderKey]
        return (
          <div key={folderKey} className={classes.row}>
            <div className={classes.rowHeader}>
              <Typography variant="caption">{folder.title}</Typography>
              <Link to={folder.url}>View all</Link>
            </div>
            <div key={folderKey} className={classes.rowInner}>
              {folderMaterials.slice(0, 5).map(material => {
                return (
                  <Link key={material.url} to={material.url}>
                    <img
                      className={cx(classes.media, {
                        [classes[`media-${folderKey}`]]: true,
                      })}
                      src={material.thumbSrc}
                      alt={material.slug}
                    />
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
