import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import MaterialThumb from '../components/MaterialThumb'

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

/**
 * Show materials on a grid
 */
export default function MaterialGrid({ materials, gridSizes, preloadCount }) {
  const classes = useStyles()
  return (
    <Grid
      alignItems="center"
      className={classes.grid}
      justify="center"
      container
    >
      {materials.map((material, idx) => (
        <Grid
          key={material.url}
          item
          {...gridSizes}
          className={classes.gridItem}
        >
          <MaterialThumb
            lazy={idx >= preloadCount}
            linkClassName={classes.link}
            className={classes.material}
            sized={false}
            material={material}
          />
        </Grid>
      ))}
    </Grid>
  )
}
