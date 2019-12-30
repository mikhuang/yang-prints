import path from 'path'
import materials from './data/materials.json'
import Material, { MATERIAL_FOLDERS } from './src/entities/Material'
import Tag from './src/entities/Tag'

const DYNAMIC_TAG_PAGES = true

// process tags, check for URL collisions
const { duplicates, tagCounts } = materials.reduce(
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
    }
    return acc
  },
  {
    duplicates: [],
    urls: [],
    tagCounts: {},
  }
)

if (duplicates.length > 0) {
  console.log('WARNING! DUPLICATES!', duplicates)
}

export default {
  getSiteData: () => ({
    materials,
    tagCounts,
    buildId: process.env.BUILD_ID || '',
  }),
  getRoutes: () => {
    const folderPages = Object.keys(MATERIAL_FOLDERS).map(folderKey => {
      const folder = MATERIAL_FOLDERS[folderKey]
      return {
        path: folder.url,
        template: 'src/containers/Folder',
        getData: () => ({
          folder,
          folderKey,
        }),
      }
    })

    const materialPages = materials.map(material => ({
      path: new Material(material).url,
      template: 'src/containers/Material',
      getData: () => ({
        material,
      }),
    }))

    const tagPages = DYNAMIC_TAG_PAGES
      ? []
      : Object.keys(tagCounts).map(tag => ({
          path: new Tag(tag).url,
          template: 'src/containers/Tag',
          getData: () => ({
            tag,
          }),
        }))

    return [
      {
        path: '/',
        children: [
          {
            path: 'all',
            template: 'src/containers/All',
          },
          {
            path: 'tags',
            template: 'src/containers/Tags',
          },
          ...materialPages,
          ...folderPages,
          ...tagPages,
        ],
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
