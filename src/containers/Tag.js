import { default as MaterialLink } from '@material-ui/core/Link'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import orderBy from 'lodash/orderBy'
import React, { Fragment } from 'react'
import { Head, useRouteData } from 'react-static'
import FolderInstructions from '../components/FolderInstructions'
import MaterialGrid from '../components/MaterialGrid'
import Title from '../components/Title'
import { toMaterialEntity } from '../entities/Material'
import { Link as RouterLink } from '@reach/router'

const PRELOAD_COUNT = 5
export default function Tag() {
  const isLarge = useMediaQuery('(min-width:600px)')
  const { materials: materialsData, tag } = useRouteData()
  const materials = toMaterialEntity(materialsData)
  const gridSizes = { xs: 6, sm: 4, lg: 3, xl: 2 }
  const tagMaterials = orderBy(materials, ['date'], ['desc']).filter(x =>
    x.tags.includes(tag)
  )

  return (
    <Fragment>
      <Head>
        <title>Yang2020 #{tag}</title>
      </Head>
      <Box p={5} mt={1}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <MaterialLink component={RouterLink} color="inherit" to="/">
            Home
          </MaterialLink>
          <MaterialLink component={RouterLink} color="inherit" to="/tags">
            Tags
          </MaterialLink>
        </Breadcrumbs>
        <Title align="center" variant={isLarge ? 'h2' : 'h4'}>
          #{tag}
        </Title>
      </Box>

      <MaterialGrid
        materials={tagMaterials}
        preloadCount={PRELOAD_COUNT}
        gridSizes={gridSizes}
      />

      <Box px={2} mt={1}>
        <FolderInstructions folderKey={tag} />
      </Box>
    </Fragment>
  )
}
