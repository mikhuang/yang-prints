import { createGenerateClassName, ServerStyleSheets } from '@material-ui/styles'
import path from 'path'
import materials from './data/materials.json'
import Material from './src/entities/Material'

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
    // TODO: folders
    return [
      {
        path: '/',
        getData: () => ({
          materials,
        }),
        children: materials.map(material => ({
          path: new Material(material).url,
          template: 'src/containers/Material',
          getData: () => ({
            materials,
            material,
          }),
        })),
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
