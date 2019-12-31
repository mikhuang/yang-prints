import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import useData from '@src/hooks/useData'
import orderBy from 'lodash/orderBy'
import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import MaterialGrid from '../components/MaterialGrid'
import Title from '../components/Title'

const PRELOAD_COUNT = 5
export default function Material() {
  const isLarge = useMediaQuery('(min-width:600px)')

  const { materials } = useData()
  const gridSizes = { xs: 6, sm: 3, lg: 2, xl: 2 }
  const allMaterials = orderBy(
    materials.filter(x => x.isVisible),
    ['date'],
    ['desc']
  )
  return (
    <Fragment>
      <Helmet>
        <title>All the YangPrints!</title>
      </Helmet>
      <Box p={5} mt={1}>
        <Title align="center" variant={isLarge ? 'h2' : 'h4'} after="!">
          All the Prints
        </Title>
      </Box>

      <MaterialGrid
        materials={allMaterials}
        preloadCount={PRELOAD_COUNT}
        gridSizes={gridSizes}
      />
    </Fragment>
  )
}
