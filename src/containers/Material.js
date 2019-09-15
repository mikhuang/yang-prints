import Box from '@material-ui/core/Box'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { default as MaterialLink } from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SaveIcon from '@material-ui/icons/SaveAltSharp'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartSharp'
import { Link as RouterLink } from '@reach/router'
import cx from 'clsx'
import { Link } from 'components/Router'
import orderBy from 'lodash/orderBy'
import React, { Fragment } from 'react'
import { Head, useRouteData } from 'react-static'
import MaterialThumb from '../components/MaterialThumb'
import {
  default as MaterialEntity,
  toMaterialEntity,
} from '../entities/Material'
import FolderInstructions from '../components/FolderInstructions'

const useStyles = makeStyles(theme => ({
  img: {
    margin: '0 auto',
    maxWidth: '100%',
    maxHeight: '50vh',
    display: 'block',
  },
  imgRound: {
    borderRadius: 1000,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  button: {
    flexGrow: 1,
    margin: theme.spacing(0, 1, 1),
  },
  rightNext: {
    textAlign: 'right',
  },
  creator: {
    color: theme.palette.secondary.light,
  },
  container: {
    maxWidth: 800,
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
      <Head>
        <meta charSet="UTF-8" />
        <title>
          YangPrints - {material.title || 'Andrew Yang 2020 Print materials'}
        </title>
        <meta
          name="description"
          content={
            `${material.description} - ${material.folder.title} for Andrew Yang` ||
            'Andrew Yang 2020 posters, handouts, flyers, sticker templates to download and print.'
          }
        />
      </Head>
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
            className={cx(classes.img, {
              [classes.imgRound]: material.isRound,
            })}
            src={material.thumbSrc}
            alt={material.title || material.slug}
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
      <Container className={classes.container}>
        {(material.title || material.description) && (
          <Box my={3}>
            <Typography variant="caption2" display="block" gutterBottom>
              {material.title}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {material.description}
            </Typography>
          </Box>
        )}
        <Box mx={-1}>
          <Box mb={3} display="flex" flexWrap="wrap">
            {material.buyUrl && (
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                size="large"
                component="a"
                rel="noreferrer noopener"
                href={material.buyUrl}
                target="_blank"
              >
                <ShoppingCartIcon className={classes.icon} />
                Buy from creator
              </Button>
            )}
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
              <SaveIcon className={classes.icon} />
              Download .{material.downloadUrlExt}
            </Button>
          </Box>
        </Box>
        <Grid container>
          <Grid item xs={6}>
            {prev ? (
              <div>
                <MaterialThumb scale={2} material={prev} />
                <Typography gutterBottom variant="caption" display="block">
                  <Link to={prev.url}>Previous</Link>
                </Typography>
              </div>
            ) : null}
          </Grid>
          <Grid item xs={6} className={classes.rightNext}>
            {next ? (
              <div>
                <MaterialThumb scale={2} material={next} />
                <Typography gutterBottom variant="caption" display="block">
                  <Link to={next.url}>Next</Link>
                </Typography>
              </div>
            ) : null}
          </Grid>
        </Grid>
        <Box mt={1}>
          <FolderInstructions folderKey={material.folderId} />
        </Box>
      </Container>
    </Fragment>
  )
}
