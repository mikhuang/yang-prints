import path from 'path'
import axios from 'axios'
import materials from 'data/materials.json'

export default {
  getRoutes: () => {
    console.log(materials)
    // TODO: folders
    return [
      {
        path: '/',
        getData: () => ({
          materials,
        }),
        children: materials.map(material => ({
          path: `/${material.folder}/${material.slug}`,
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
  ],
}
