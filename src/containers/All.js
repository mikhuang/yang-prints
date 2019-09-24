import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import orderBy from 'lodash/orderBy'
import React, { Fragment } from 'react'
import { Head, useRouteData } from 'react-static'
import MaterialThumb from '../components/MaterialThumb'
import Title from '../components/Title'
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

const PRELOAD_COUNT = 5
export default function Material() {
  const classes = useStyles()
  const isLarge = useMediaQuery('(min-width:600px)')

  const { materials: materialsData } = useRouteData()
  const materials = toMaterialEntity(materialsData)
  const gridSizes = { xs: 6, sm: 3, lg: 2, xl: 2 }

  return (
    <Fragment>
      <Head>
        <title>All the YangPrints!</title>
      </Head>
      <Box p={5} mt={1}>
        <Title align="center" variant={isLarge ? 'h2' : 'h4'} after="!">
          All the Prints
        </Title>
      </Box>

      <Grid
        alignItems="center"
        className={classes.grid}
        justify="center"
        container
      >
        {orderBy(materials, ['date'], ['desc']).map((material, idx) => (
          <Grid
            item
            key={material.url}
            {...gridSizes}
            className={classes.gridItem}
          >
            <MaterialThumb
              lazy={idx >= PRELOAD_COUNT}
              linkClassName={classes.link}
              className={classes.material}
              sized={false}
              material={material}
            />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  )
}
