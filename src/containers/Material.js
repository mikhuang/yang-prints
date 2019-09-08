import React, { Fragment } from 'react'
import { useRouteData } from 'react-static'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MaterialThumb from '../components/MaterialThumb'
import SaveAltSharpIcon from '@material-ui/icons/SaveAltSharp'

import {
  default as MaterialEntity,
  toMaterialEntity,
} from '../entities/Material'
//
import { Link } from 'components/Router'
const useStyles = makeStyles(theme => ({
  img: {
    margin: '0 auto',
    maxWidth: '100%',
    maxHeight: '50vh',
    display: 'block',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  button: {
    width: '100%',
  },
}))
export default function Material() {
  const classes = useStyles()

  const { materials: materialsData, material: materialData } = useRouteData()
  const materials = toMaterialEntity(materialsData)
  const material = new MaterialEntity(materialData)

  return (
    <Fragment>
      <Box py={1} mb={2} bgcolor={'text.primary'}>
        <a
          download
          rel="noreferrer noopener"
          href={material.downloadUrl}
          target="_blank"
        >
          <img
            className={classes.img}
            src={material.thumbSrc}
            alt={material.slug}
          />
        </a>
      </Box>
      <Container>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          size="large"
          component="a"
          download
          rel="noreferrer noopener"
          href={material.downloadUrl}
          target="_blank"
        >
          <SaveAltSharpIcon className={classes.icon} />
          Download
        </Button>
        <Box mt={2}>
          <Typography variant="caption">By {material.creator}</Typography>
        </Box>
      </Container>
    </Fragment>
  )
}
