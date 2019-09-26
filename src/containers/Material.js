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
import PhotoIcon from '@material-ui/icons/InsertPhotoSharp'
import ArrowBack from '@material-ui/icons/ArrowBackIosSharp'
import ArrowForward from '@material-ui/icons/ArrowForwardIosSharp'
import { Link as RouterLink } from '@reach/router'
import cx from 'clsx'
import orderBy from 'lodash/orderBy'
import React, { Fragment } from 'react'
import { Head, useRouteData, useSiteData } from 'react-static'
import MaterialThumb from '../components/MaterialThumb'
import ReactGA from 'react-ga'
import {
  default as MaterialEntity,
  toMaterialEntity,
} from '../entities/Material'
import FolderInstructions from '../components/FolderInstructions'
import MaterialTags from '../components/MaterialTags'
import { useHotkeys } from 'react-hotkeys-hook'
import { navigate } from '@reach/router'

const useStyles = makeStyles(theme => ({
  img: {
    maxWidth: '100%',
    maxHeight: '50vh',
    boxShadow: '0 0.5em 2em rgba(0,0,0,.35)',
    transition: 'box-shadow .25s',
    '&:hover': {
      boxShadow: '0 0.5em 2.5em rgba(0,0,0,.65)',
    },
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
  navLink: {
    margin: theme.spacing(1, 0),
  },
}))

export default function Material(props) {
  const classes = useStyles()

  const { material: materialData } = useRouteData()
  const { materials: materialsData } = useSiteData()
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

  function goToUrl(m) {
    if (m && m.url) {
      navigate(m.url)
    }
  }

  useHotkeys('right', () => goToUrl(next), [next, goToUrl])
  useHotkeys('left', () => goToUrl(prev), [prev, goToUrl])

  // if we have originalUrl, link the creator
  const creatorLinkProps = material.originalUrl
    ? { component: 'a', href: material.originalUrl, target: '_blank' }
    : {}

  const handleClickMaterial = () => {
    ReactGA.event({
      category: 'Material',
      action: 'Download',
      label: material.url,
    })
  }
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
      <Box p={2}>
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
      <Box mb={1} display="flex" justifyContent="center">
        <a
          download
          rel="noreferrer noopener"
          href={material.downloadUrl}
          target="_blank"
          onClick={handleClickMaterial}
        >
          <img
            className={cx(classes.img, {
              [classes.imgRound]: material.isRound,
            })}
            src={material.thumbSrc}
            alt={material.title || material.slug}
          />
        </a>
      </Box>
      <Container className={classes.container}>
        <Box my={3}>
          <Typography variant="h6" display="block">
            {material.title}
          </Typography>
          <Typography
            {...creatorLinkProps}
            variant="caption"
            className={classes.creator}
            gutterBottom
          >
            By {material.creator}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {material.description}
          </Typography>
          <MaterialTags variant="caption" material={material} />
        </Box>

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
              onClick={handleClickMaterial}
            >
              <SaveIcon className={classes.icon} />
              Download .{material.downloadUrlExt}
            </Button>
            {material.srcPath && (
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                size="large"
                component="a"
                rel="noreferrer noopener"
                href={material.srcPath}
                target="_blank"
              >
                <PhotoIcon className={classes.icon} />
                Source{material.srcExt && ` .${material.srcExt}`}
              </Button>
            )}
          </Box>
        </Box>
        <Grid container>
          <Grid item xs={6}>
            {prev ? (
              <div>
                <Button
                  component={RouterLink}
                  to={prev.url}
                  className={classes.navLink}
                >
                  <ArrowBack />
                  Previous
                </Button>
                <br />
                <MaterialThumb scale={2} material={prev} />
              </div>
            ) : null}
          </Grid>
          <Grid item xs={6} className={classes.rightNext}>
            {next ? (
              <div>
                <Button
                  component={RouterLink}
                  to={next.url}
                  className={classes.navLink}
                >
                  Next
                  <ArrowForward />
                </Button>
                <br />
                <MaterialThumb scale={2} material={next} />
              </div>
            ) : null}
          </Grid>
        </Grid>
        <Box mt={6}>
          <FolderInstructions
            folderKey={material.folderId}
            tags={material.tags}
          />
        </Box>
      </Container>
    </Fragment>
  )
}
