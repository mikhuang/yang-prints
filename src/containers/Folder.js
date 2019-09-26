import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import orderBy from 'lodash/orderBy'
import React, { Fragment } from 'react'
import { Head, useRouteData, useSiteData } from 'react-static'
import FolderInstructions from '../components/FolderInstructions'
import MaterialGrid from '../components/MaterialGrid'
import Title from '../components/Title'
import { toMaterialEntity } from '../entities/Material'

const PRELOAD_COUNT = 5
export default function Material() {
  const isLarge = useMediaQuery('(min-width:600px)')
  const { folder, folderKey } = useRouteData()
  const { materials: materialsData } = useSiteData()
  const materials = toMaterialEntity(materialsData)
  const gridSizes = folder.gridSizes || { xs: 6, sm: 4, lg: 3, xl: 2 }
  const folderMaterials = orderBy(materials, ['date'], ['desc']).filter(
    x => x.folderId === folderKey
  )

  return (
    <Fragment>
      <Head>
        <title>Yang2020 {folder.title}</title>
      </Head>
      <Box p={5} mt={1}>
        <Title align="center" variant={isLarge ? 'h2' : 'h4'}>
          {folder.title}
        </Title>
      </Box>

      <MaterialGrid
        materials={folderMaterials}
        preloadCount={PRELOAD_COUNT}
        gridSizes={gridSizes}
      />

      <Box px={2} mt={1}>
        <FolderInstructions folderKey={folderKey} />
      </Box>
    </Fragment>
  )
}
