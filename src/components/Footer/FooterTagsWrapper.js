import React from 'react'

import FooterTags from './FooterTags'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import Title from '../../components/Title'

export default function FooterTagsWrapper() {
  return (
    <React.Suspense fallback={<CircularProgress />}>
      <Box my={3}>
        <Title gutterBottom variant="h6" after=":">
          Materials by Tag
        </Title>
        <FooterTags />
      </Box>
    </React.Suspense>
  )
}
