import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.primary.main,
    letterSpacing: 0.2,
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightMedium,
    '&:after': {
      content: '"."',
      color: theme.palette.secondary.main,
    },
  },
}))

export default function Title({ children, ...otherProps }) {
  const classes = useStyles()
  return (
    <Typography {...otherProps} className={classes.title}>
      {children}
    </Typography>
  )
}
