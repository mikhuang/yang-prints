import React from 'react'
import { useSiteData } from 'react-static'
import Tag from '../../entities/Tag'
import Navbar from './Navbar'

function tagCompareFn(a, b) {
  return a.count > b.count ? -1 : 1
}

export default function NavbarWithTags() {
  const { tagCounts } = useSiteData()

  const tags = Object.keys(tagCounts)
    .map(key => new Tag(key, tagCounts[key]))
    .sort(tagCompareFn)

  return <Navbar tags={tags} />
}
