import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import MaterialThumb from 'components/MaterialThumb'
import { AdapterLink, Link } from 'components/Router'
import Title from 'components/Title'
import groupBy from 'lodash/groupBy'
import orderBy from 'lodash/orderBy'
import React from 'react'
import { useSiteData } from 'react-static'
import { MATERIAL_FOLDERS, toMaterialEntity } from '../entities/Material'
import { trackWindowScroll } from 'react-lazy-load-image-component'

const ROW_LIMIT = 12

const useStyles = makeStyles(theme => ({
  row: {},
  rowInner: {
    overflow: 'hidden',
    overflowX: 'scroll',
    '-webkit-overflow-scrolling': 'touch',
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

const PRELOAD_ROWS_COUNT = 1

function Index({ scrollPosition }) {
  const isLarge = useMediaQuery('(min-width:600px)')
  const classes = useStyles()

  const { materials: materialsData } = useSiteData()
  const materials = toMaterialEntity(materialsData).filter(m => m.isVisible)
  const materialsByFolder = groupBy(materials, 'folderId')

  return (
    <Box my={3}>
      <Box mx={2} py={3} textAlign="center">
        <img width={225} src="/img/yangprints.png" alt="YangPrints.com" />
        <Title variant={isLarge ? 'h2' : 'h4'} after="!">
          Print All the Yang
        </Title>
      </Box>

      {Object.keys(MATERIAL_FOLDERS).map(folderKey => {
        const folder = MATERIAL_FOLDERS[folderKey]
        if (folder.hide) {
          return null
        }
        const folderMaterials = materialsByFolder[folderKey]
        const addlCount = folderMaterials.length - ROW_LIMIT
        return (
          <Box mb={5} key={folderKey} className={classes.row}>
            <Link to={folder.url}>
              <Box
                display="flex"
                p={2}
                pb={0}
                alignItems="baseline"
                justifyContent="space-between"
              >
                <Title variant={isLarge ? 'h4' : 'h6'}>{folder.title}</Title>
                <Typography variant="caption">View all</Typography>
              </Box>
            </Link>
            <div key={folderKey} className={classes.rowInner}>
              {orderBy(folderMaterials, ['date'], ['desc'])
                .slice(0, ROW_LIMIT)
                .map((material, idx) => (
                  <MaterialThumb
                    lazy={idx >= PRELOAD_ROWS_COUNT}
                    className={classes.material}
                    key={material.slug}
                    material={material}
                    scrollPosition={scrollPosition}
                  />
                ))}
              {addlCount > 0 && (
                <Box p={2}>
                  <Button
                    variant="outlined"
                    className={classes.buttonBig}
                    component={AdapterLink}
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
    </Box>
  )
}
export default trackWindowScroll(Index)
