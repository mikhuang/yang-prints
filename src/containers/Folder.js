import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { useRouteData } from 'react-static'
import MaterialThumb from '../components/MaterialThumb'
import Title from '../components/Title'
import { toMaterialEntity } from '../entities/Material'

const useStyles = makeStyles(theme => ({
  material: {
    margin: theme.spacing(2, 1),
  },
}))

export default function Material() {
  const classes = useStyles()

  const { materials: materialsData, folder, folderKey } = useRouteData()
  const materials = toMaterialEntity(materialsData)
  return (
    <Container>
      <Box mt={3}>
        <Title variant="h5">{folder.title}</Title>
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
      >
        {materials
          .filter(x => x.folderId === folderKey)
          .map(material => (
            <MaterialThumb
              zoom={1.5}
              className={classes.material}
              key={material.slug}
              material={material}
            />
          ))}
      </Box>
    </Container>
  )
}
