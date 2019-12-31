import Box from '@material-ui/core/Box'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import { default as MaterialLink } from '@material-ui/core/Link'
import { Link as RouterLink } from '@reach/router'
import orderBy from 'lodash/orderBy'
import React, { Fragment } from 'react'
import { Head, useRouteData, useSiteData } from 'react-static'
import FolderInstructions from '../components/FolderInstructions'
import MaterialGrid from '../components/MaterialGrid'
import { toMaterialEntity } from '../entities/Material'
import Tag from '../entities/Tag'

const PRELOAD_COUNT = 5
export default function TagContainer() {
  const { tag: rawTag } = useRouteData()
  const { materials: materialsData } = useSiteData()

  const materials = toMaterialEntity(materialsData).filter(m => m.isVisible)
  const gridSizes = { xs: 6, sm: 4, lg: 3, xl: 2 }
  const tagMaterials = orderBy(materials, ['date'], ['desc']).filter(x =>
    x.tags.includes(rawTag)
  )
  const tag = new Tag(rawTag)

  return (
    <Fragment>
      <Head>
        <title>Yang2020 {tag.title}</title>
      </Head>
      <Box p={2}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <MaterialLink component={RouterLink} color="inherit" to="/">
            Home
          </MaterialLink>
          <MaterialLink component={RouterLink} color="inherit" to="/tags">
            Tags
          </MaterialLink>
          <MaterialLink
            color="textPrimary"
            aria-current="page"
            component={RouterLink}
            to={tag.url}
          >
            {tag.title}
          </MaterialLink>
        </Breadcrumbs>
      </Box>

      <MaterialGrid
        materials={tagMaterials}
        preloadCount={PRELOAD_COUNT}
        gridSizes={gridSizes}
      />

      <Box px={2} mt={1}>
        <FolderInstructions tags={[rawTag]} />
      </Box>
    </Fragment>
  )
}
