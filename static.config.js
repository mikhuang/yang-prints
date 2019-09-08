import { createGenerateClassName, ServerStyleSheets } from '@material-ui/styles'
import path from 'path'
import materials from './data/materials.json'
import Material, { MATERIAL_FOLDERS } from './src/entities/Material'

const generateClassName = createGenerateClassName()

export default {
  beforeRenderToHtml: (App, { meta }) => {
    meta.muiSheets = new ServerStyleSheets()

    return meta.muiSheets.collect(App)
  },
  headElements: (elements, { meta }) => [
    ...elements,
    meta.muiSheets.getStyleElement(),
  ],
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
    [
      'react-static-plugin-jss',
      {
        providerProps: {
          generateClassName,
        },
      },
    ],
  ],
}
