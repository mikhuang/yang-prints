import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import MaterialThumb from 'components/MaterialThumb'
import { Link } from 'components/Router'
import Title from 'components/Title'
import groupBy from 'lodash/groupBy'
import orderBy from 'lodash/orderBy'
import React from 'react'
import { useRouteData } from 'react-static'
import { MATERIAL_FOLDERS, toMaterialEntity } from '../entities/Material'

const ROW_LIMIT = 8

const useStyles = makeStyles(theme => ({
  row: {},
  rowInner: {
    overflow: 'hidden',
    overflowX: 'scroll',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 0),
    '&::-webkit-scrollbar': {
      '-webkit-appearance': 'none',
      height: theme.spacing(1.25),
      backgroundColor: theme.palette.grey[300],
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
      '-webkit-box-shadow': '0 0 1px rgba(255,255,255,.5)',
    },
  },
  material: {
    margin: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2),
    },
  },
  buttonBig: {
    padding: theme.spacing(2),
    minWidth: 250,
  },
}))

export default () => {
  const classes = useStyles()

  const { materials: materialsData } = useRouteData()
  const materials = toMaterialEntity(materialsData)
  const materialsByFolder = groupBy(materials, 'folderId')

  return (
    <div>
      {Object.keys(MATERIAL_FOLDERS).map(folderKey => {
        const folder = MATERIAL_FOLDERS[folderKey]
        const folderMaterials = materialsByFolder[folderKey]
        const addlCount = folderMaterials.length - ROW_LIMIT
        return (
          <Box mb={5} key={folderKey} className={classes.row}>
            <Link to={folder.url}>
              <Box display="flex" p={2} pb={0} justifyContent="space-between">
                <Title>{folder.title}</Title>
                <Typography variant="caption">View all</Typography>
              </Box>
            </Link>
            <div key={folderKey} className={classes.rowInner}>
              {orderBy(folderMaterials, ['date'], ['desc'])
                .slice(0, ROW_LIMIT)
                .map(material => (
                  <MaterialThumb
                    className={classes.material}
                    key={material.slug}
                    material={material}
                  />
                ))}
              {addlCount > 0 && (
                <Box p={2}>
                  <Button
                    variant="outlined"
                    className={classes.buttonBig}
                    component={Link}
                    to={folder.url}
                  >
                    {addlCount} more {folder.title}
                  </Button>
                </Box>
              )}
            </div>
          </Box>
        )
      })}
    </div>
  )
}
