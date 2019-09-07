import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'

export default () => {
  const { materials } = useRouteData()
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to React-Static</h1>
      {materials.map(material => {
        const url = `${material.folder}/${material.slug}`
        return (
          <div key={url}>
            <Link to={url}>{material.slug}</Link>
          </div>
        )
      })}
    </div>
  )
}
