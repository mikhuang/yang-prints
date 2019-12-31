import materials from '../data/materials.json'
import Material from '../entities/Material'

// process tags, check for URL collisions
const { duplicates, tagCounts, materialEntities } = materials.reduce(
  (acc, materialRaw) => {
    const material = new Material(materialRaw)
    const url = material.url
    if (acc.urls.includes(url)) {
      acc.duplicates.push(url)
    } else {
      // only count material tags if the material is visible
      if (material.isVisible) {
        material.tags.forEach(tag => {
          if (tag) {
            acc.tagCounts[tag] = (acc.tagCounts[tag] || 0) + 1
          }
        })
      }
      acc.urls.push(url)
      acc.materialEntities.push(material)
    }
    return acc
  },
  {
    materialEntities: [],
    duplicates: [],
    urls: [],
    tagCounts: {},
  }
)

if (duplicates.length > 0) {
  console.log('WARNING! DUPLICATES!', duplicates)
}

export default function useData() {
  return {
    materials: materialEntities,
    tagCounts,
    buildId: process.env.BUILD_ID || '',
  }
}
