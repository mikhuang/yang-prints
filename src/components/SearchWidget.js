import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CloseIcon from '@material-ui/icons/CloseSharp'
import SearchIcon from '@material-ui/icons/SearchSharp'
import Fuse from 'fuse.js'
import React, { useEffect, useState } from 'react'
import SearchForm from './SearchForm'

const fuseOptions = {
  tokenize: true,
  shouldSort: true,
  keys: [
    {
      name: 'title',
      weight: 0.9,
    },
    {
      name: 'description',
      weight: 0.2,
    },
    {
      name: 'tags',
      weight: 0.2,
    },
    {
      name: 'creator',
      weight: 0.2,
    },
    {
      name: 'filename',
      weight: 0.2,
    },
  ],
}

const useStyles = makeStyles(theme => ({
  menu: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: theme.spacing(1.3),
    backgroundColor: theme.palette.primary.dark,
    zIndex: theme.zIndex.modal,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1.2),
    top: theme.spacing(1.6),
  },
}))

export default function SearchWidget({ materials }) {
  const classes = useStyles()
  const isLarge = useMediaQuery('(min-width:600px)')

  const [fuse, setFuse] = useState(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const validMaterials = materials.filter(x => x.isVisible)
    setFuse(new Fuse(validMaterials, fuseOptions))
  }, [materials])

  if (!fuse) {
    return null
  }

  // TODO: autofocus
  const form = (
    <SearchForm
      fuse={fuse}
      shrinkable={isLarge}
      onNavigate={() => setOpen(false)}
    />
  )

  if (isLarge) {
    return form
  }

  if (open) {
    return (
      <div className={classes.menu}>
        {form}
        <IconButton
          classes={{ root: classes.closeButton }}
          color="inherit"
          aria-label="close"
          onClick={() => setOpen(false)}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </div>
    )
  }
  return (
    <IconButton
      color="inherit"
      aria-label="search"
      onClick={() => setOpen(true)}
    >
      <SearchIcon />
    </IconButton>
  )
}
