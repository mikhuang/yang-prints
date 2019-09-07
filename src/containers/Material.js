import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'

export default function Material() {
  const { material, materials } = useRouteData()
  return (
    <div>
      <Link to="/">{'<'} Back</Link>
      <br />
      <h3>{material.slug}</h3>
      <p>{material.path}</p>
    </div>
  )
}
