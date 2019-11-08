import React from 'react'
import { useSiteData } from 'react-static'
import Tag from '../../entities/Tag'
import Navbar from './Navbar'
import { toMaterialEntity } from '../../entities/Material'
function tagCompareFn(a, b) {
  return a.count > b.count ? -1 : 1
}

export default function NavbarWithData() {
  const { materials: materialsData, tagCounts } = useSiteData()
  const materials = toMaterialEntity(materialsData)

  const tags = Object.keys(tagCounts)
    .map(key => new Tag(key, tagCounts[key]))
    .sort(tagCompareFn)

  return <Navbar tags={tags} materials={materials} />
}
