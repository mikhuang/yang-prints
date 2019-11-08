import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import SearchIcon from '@material-ui/icons/SearchSharp'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { navigate } from '@reach/router'
import Fuse from 'fuse.js'
import throttle from 'lodash/throttle'
import React, { useEffect, useState } from 'react'

const fuseOptions = {
  keys: [
    {
      name: 'title',
      weight: 1,
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
      weight: 0.1,
    },
    {
      name: 'path',
      weight: 0.05,
    },
  ],
}

const MAX_RESULTS = 20

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
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 320,
      },
    },
  },
  thumb: {
    width: theme.spacing(7),
    minHeight: theme.spacing(7),
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    marginRight: theme.spacing(1),
  },
}))

function SearchForm({ fuse }) {
  const classes = useStyles()

  const [options, setOptions] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleChange = event => {
    setInputValue(event.target.value)
  }

  const handleSelect = (_, material) => {
    if (material) {
      navigate(material.url)
    }
  }

  const search = React.useMemo(
    () =>
      throttle(inputValue => {
        if (fuse) {
          setOptions(fuse.search(inputValue).slice(0, MAX_RESULTS))
        }
      }, 200),
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
      includeInputInList
      // freeSolo
      onChange={handleSelect}
      disableOpenOnFocus
      clearOnEscape
      renderInput={params => {
        // console.log(params)
        return (
          <div className={classes.search} ref={params.ref}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
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
        // const matches =
        //   material.structured_formatting.main_text_matched_substrings
        // const parts = parse(
        //   material.structured_formatting.main_text,
        //   matches.map(match => [match.offset, match.offset + match.length])
        // )

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
              {/*parts.map((part, index) => (
                <span
                  key={index}
                  style={{ fontWeight: part.highlight ? 700 : 400 }}
                >
                  {part.text}
                </span>
              ))*/}
              {material.title}

              <Typography variant="body2" color="textSecondary">
                {material.creator}
              </Typography>
            </Grid>
          </Grid>
        )
      }}
    />
  )
}

export default function SearchWidget({ materials }) {
  const isLarge = useMediaQuery('(min-width:600px)')

  const [fuse, setFuse] = useState(null)
  useEffect(() => {
    const validMaterials = materials.filter(x => x.isVisible)
    setFuse(new Fuse(validMaterials, fuseOptions))
  }, [materials])

  if (!fuse) {
    return null
  }

  const form = <SearchForm fuse={fuse} />
  return isLarge ? (
    form
  ) : (
    <IconButton color="inherit" aria-label="search">
      <SearchIcon />
    </IconButton>
  )
}
