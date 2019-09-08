import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import MaterialThumb from 'components/MaterialThumb'
import { Link } from 'components/Router'
import groupBy from 'lodash/groupBy'
import orderBy from 'lodash/orderBy'
import React from 'react'
import { useRouteData } from 'react-static'
import { MATERIAL_FOLDERS, toMaterialEntity } from '../entities/Material'

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
      backgroundColor: 'rgba(0,0,0,.05)',
    },

    '&::-webkit-scrollbar-thumb': {
      // borderRadius: theme.spacing(1),
      backgroundColor: 'rgba(0,0,0,.25)',
      '-webkit-box-shadow': '0 0 1px rgba(255,255,255,.5)',
    },
  },
  material: {
    margin: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2),
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
          <Box mb={5} key={folderKey} className={classes.row}>
            <Link to={folder.url}>
              <Box display="flex" p={2} justifyContent="space-between">
                <Typography>{folder.title}</Typography>
                <Typography variant="caption">View all</Typography>
              </Box>
            </Link>
            <div key={folderKey} className={classes.rowInner}>
              {orderBy(folderMaterials, ['date'], ['desc'])
                .slice(0, 5)
                .map(material => (
                  <MaterialThumb
                    className={classes.material}
                    key={material.slug}
                    material={material}
                  />
                ))}
            </div>
          </Box>
        )
      })}
    </div>
  )
}
