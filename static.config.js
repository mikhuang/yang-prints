import path from 'path'
import materials from './data/materials.json'
import Material, { MATERIAL_FOLDERS } from './src/entities/Material'

// check for URL collisions
const { duplicates } = materials.reduce(
  (acc, m) => {
    const url = new Material(m).url
    if (acc.urls.includes(url)) {
      acc.duplicates.push(url)
    } else {
      acc.urls.push(url)
    }
    return acc
  },
  {
    duplicates: [],
    urls: [],
  }
)

if (duplicates.length > 0) {
  console.log('WARNING! DUPLICATES!', duplicates)
}

export default {
  getRoutes: () => {
    const folderPages = Object.keys(MATERIAL_FOLDERS).map(folderKey => {
      const folder = MATERIAL_FOLDERS[folderKey]
      return {
        path: folder.url,
        template: 'src/containers/Folder',
        getData: () => ({
          materials,
          folder,
          folderKey,
        }),
      }
    })

    const materialPages = materials.map(material => ({
      path: new Material(material).url,
      template: 'src/containers/Material',
      getData: () => ({
        materials,
        material,
      }),
    }))

    return [
      {
        path: '/',
        getData: () => ({
          materials,
        }),
        children: [
          ...materialPages,
          ...folderPages,
          {
            path: 'all',
            template: 'src/containers/All',
            getData: () => ({
              materials,
            }),
          },
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
