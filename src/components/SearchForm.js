import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/SearchSharp'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { navigate } from '@reach/router'
import debounce from 'lodash/debounce'
import React, { useEffect, useState } from 'react'

const MAX_RESULTS = 20
const DEBOUNCE_AMOUNT = 500

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: ({ shrinkable }) => ({
    color: 'inherit',
    // background: 'red',
    display: shrinkable ? 'inline-flex' : 'block',
  }),
  inputInput: ({ shrinkable }) => ({
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: shrinkable
      ? {
          width: 120,
          '&:focus': {
            width: 320,
          },
        }
      : {},
  }),
  thumb: {
    width: theme.spacing(7),
    minHeight: theme.spacing(7),
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    marginRight: theme.spacing(1),
  },
}))

export default function SearchForm({ fuse, shrinkable, onNavigate }) {
  const classes = useStyles({ shrinkable })

  const [options, setOptions] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [popupOpen, setPopupOpen] = useState(false)

  const handleChange = event => {
    setInputValue(event.target.value)
  }

  const handleSelect = (_, material) => {
    if (material) {
      navigate(material.url)
      onNavigate(material)
    }
  }

  const search = React.useMemo(
    () =>
      debounce(inputValue => {
        if (fuse) {
          const nextOptions = fuse.search(inputValue).slice(0, MAX_RESULTS)
          console.log(nextOptions)
          setOptions(nextOptions)
        }
      }, DEBOUNCE_AMOUNT),
    [setOptions, fuse]
  )

  useEffect(() => {
    search(inputValue)
  }, [inputValue, search])

  return (
    <Autocomplete
      getOptionLabel={option => option.title || ''}
      filterOptions={x => x}
      options={options}
      autoComplete
      onClose={() => setPopupOpen(false)}
      onOpen={() => setPopupOpen(true)}
      open={popupOpen}
      includeInputInList
      onChange={handleSelect}
      disableOpenOnFocus
      clearOnEscape
      renderInput={params => {
        return (
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              aria-label="search"
              onChange={handleChange}
            />
          </div>
        )
      }}
      renderOption={material => {
        return (
          <Grid container alignItems="center">
            <Grid
              item
              className={classes.thumb}
              style={{
                backgroundImage: `url("${material.thumbSrc}")`,
              }}
            />
            <Grid item xs>
              <Typography variant="body2">{material.title}</Typography>
              <Typography variant="caption" color="textSecondary">
                {material.creator}
              </Typography>
            </Grid>
          </Grid>
        )
      }}
    />
  )
}
