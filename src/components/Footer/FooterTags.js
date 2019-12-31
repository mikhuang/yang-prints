import React from 'react'
import useData from '@src/hooks/useData'
import TagList from '../TagList'
import Tag from '../../entities/Tag'

function tagCompareFn(a, b) {
  return a.title < b.title ? -1 : 1
}
export default function FooterTags() {
  const { tagCounts } = useData()
  const tags = Object.keys(tagCounts)
    .map(key => new Tag(key, tagCounts[key]))
    .filter(tag => tag.count > 1)
    .sort(tagCompareFn)
  return <TagList tags={tags} />
}
