import path from 'path'
import materials from './data/materials.json'
import { createGenerateClassName } from '@material-ui/styles'
import Material from './src/entities/Material'

const generateClassName = createGenerateClassName()

export default {
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
