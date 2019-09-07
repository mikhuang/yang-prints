import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
import Typography from '@material-ui/core/Typography'
// import Material from '../containers/Material'
import { toMaterialEntity } from '../entities/Material'

export default () => {
  const { materials: materialsData } = useRouteData()
  const materials = toMaterialEntity(materialsData)
  return (
    <div style={{ textAlign: 'center' }}>
      <Typography>Welcome to React-Static</Typography>
      {materials.map(material => {
        return (
          <div key={material.url}>
            <Link to={material.url}>
              <img src={material.thumbSrc} alt={material.slug} />
              {material.slug}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
