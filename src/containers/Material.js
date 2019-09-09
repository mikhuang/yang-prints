import Box from '@material-ui/core/Box'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { default as MaterialLink } from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SaveAltSharpIcon from '@material-ui/icons/SaveAltSharp'
import { Link as RouterLink } from '@reach/router'
import { Link } from 'components/Router'
import orderBy from 'lodash/orderBy'
import React, { Fragment } from 'react'
import { useRouteData } from 'react-static'
import MaterialThumb from '../components/MaterialThumb'
import {
  default as MaterialEntity,
  toMaterialEntity,
} from '../entities/Material'

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
  rightNext: {
    textAlign: 'right',
  },
  creator: {
    color: theme.palette.secondary.light,
  },
}))

export default function Material() {
  const classes = useStyles()

  const { materials: materialsData, material: materialData } = useRouteData()
  const materials = toMaterialEntity(materialsData)
  const material = new MaterialEntity(materialData)

  const folderMaterials = orderBy(
    materials.filter(x => x.folderId === material.folderId),
    ['date'],
    ['desc']
  )

  const currentIndex = folderMaterials.findIndex(x => x.slug === material.slug)
  const prev = folderMaterials[currentIndex - 1]
  const next = folderMaterials[currentIndex + 1]

  // if we have originalUrl, link the creator
  const creatorLinkProps = material.originalUrl
    ? { component: 'a', href: material.originalUrl, target: '_blank' }
    : {}
  return (
    <Fragment>
      <Box px={2} py={1}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <MaterialLink component={RouterLink} color="inherit" to="/">
            Home
          </MaterialLink>
          <MaterialLink
            component={RouterLink}
            color="inherit"
            to={material.folder.url}
          >
            {material.folder.title}
          </MaterialLink>
        </Breadcrumbs>
      </Box>
      <Box pt={3} mb={2} bgcolor={'text.primary'}>
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
        <Box p={1} px={2}>
          <Typography
            {...creatorLinkProps}
            variant="caption"
            className={classes.creator}
          >
            By {material.creator}
          </Typography>
        </Box>
      </Box>
      <Container>
        <Box mb={3}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            size="large"
            component="a"
            download
            rel="noreferrer noopener"
            href={material.downloadUrl}
            target="_blank"
          >
            <SaveAltSharpIcon className={classes.icon} />
            Download .{material.downloadUrlExt}
          </Button>
        </Box>
        <Grid container>
          <Grid item xs={6}>
            {prev ? (
              <div>
                <Typography gutterBottom variant="caption" display="block">
                  <Link to={prev.url}>Previous</Link>
                </Typography>
                <MaterialThumb scale={2} material={prev} />
              </div>
            ) : null}
          </Grid>
          <Grid item xs={6} className={classes.rightNext}>
            {next ? (
              <div>
                <Typography gutterBottom variant="caption" display="block">
                  <Link to={next.url}>Next</Link>
                </Typography>
                <MaterialThumb scale={2} material={next} />
              </div>
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}
