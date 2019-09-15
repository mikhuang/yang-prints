import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import orderBy from 'lodash/orderBy'
import React, { Fragment } from 'react'
import { Head, useRouteData } from 'react-static'
import MaterialThumb from '../components/MaterialThumb'
import Title from '../components/Title'
import FolderInstructions from '../components/FolderInstructions'
import { toMaterialEntity } from '../entities/Material'

const useStyles = makeStyles(theme => ({
  grid: { padding: theme.spacing(1) },
  gridItem: {
    textAlign: 'center',
  },
  link: {
    padding: theme.spacing(2, 1),
    display: 'inline-block',
    maxWidth: 350,
  },
  material: {
    maxHeight: 350,
  },
}))

export default function Material() {
  const classes = useStyles()

  const { materials: materialsData, folder, folderKey } = useRouteData()
  const materials = toMaterialEntity(materialsData)
  const gridSizes = folder.gridSizes || { xs: 6, sm: 4, lg: 3, xl: 2 }

  return (
    <Fragment>
      <Head>
        <title>Yang2020 {folder.title}</title>
      </Head>
      <Box p={2} mt={1}>
        <Title variant="h4">{folder.title}</Title>
      </Box>

      <Grid
        alignItems="center"
        className={classes.grid}
        justify="center"
        container
      >
        {orderBy(materials, ['date'], ['desc'])
          .filter(x => x.folderId === folderKey)
          .map(material => (
            <Grid item {...gridSizes} className={classes.gridItem}>
              <MaterialThumb
                linkClassName={classes.link}
                className={classes.material}
                sized={false}
                key={material.slug}
                material={material}
              />
            </Grid>
          ))}
      </Grid>
      <Box px={2} mt={1}>
        <FolderInstructions folderKey={folderKey} />
      </Box>
    </Fragment>
  )
}
