import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import useData from '@src/hooks/useData'
import NotFound from '@src/pages/404'
import orderBy from 'lodash/orderBy'
import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import FolderInstructions from '../components/FolderInstructions'
import MaterialGrid from '../components/MaterialGrid'
import Title from '../components/Title'
import { MATERIAL_FOLDERS } from '../entities/Material'
const PRELOAD_COUNT = 5
export default function Folder({ folderSlug }) {
  const isLarge = useMediaQuery('(min-width:600px)')
  const { materials: materialsData } = useData()
  const folder = MATERIAL_FOLDERS[folderSlug]

  if (!folder) {
    return <NotFound />
  }
  const materials = materialsData.filter(m => m.isVisible)
  const gridSizes = folder.gridSizes || { xs: 6, sm: 4, lg: 3, xl: 2 }
  const folderMaterials = orderBy(materials, ['date'], ['desc']).filter(
    x => x.folderId === folderSlug
  )

  return (
    <Fragment>
      <Helmet>
        <title>Yang2020 {folder.title}</title>
      </Helmet>
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
        <FolderInstructions materialSlug={folderSlug} />
      </Box>
    </Fragment>
  )
}
