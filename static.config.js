import path from 'path'
// import axios from 'axios'
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
  // getRoutes: async () => {
  //   const { data: posts } = await axios.get(
  //     'https://jsonplaceholder.typicode.com/posts'
  //   )

  //   return [
  //     {
  //       path: '/blog',
  //       getData: () => ({
  //         posts,
  //       }),
  //       children: posts.map(post => ({
  //         path: `/post/${post.id}`,
  //         template: 'src/containers/Post',
  //         getData: () => ({
  //           post,
  //         }),
  //       })),
  //     },
  //   ]
  // },
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
