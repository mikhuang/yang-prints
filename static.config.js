import path from 'path'
import materials from './data/materials.json'
import Material, { MATERIAL_FOLDERS } from './src/entities/Material'

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
        children: [...materialPages, ...folderPages],
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
