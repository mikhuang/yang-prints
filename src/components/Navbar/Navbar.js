import { Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreSharp'
import MenuIcon from '@material-ui/icons/Menu'
import useData from '@src/hooks/useData'
import React, { Fragment, useState } from 'react'
import { AdapterLink } from '../../components/Router'
import SearchWidget from '../../components/SearchWidget'
import { MATERIAL_FOLDERS } from '../../entities/Material'
import Tag from '../../entities/Tag'
import TwitterIcon from './TwitterIcon'

function tagCompareFn(a, b) {
  return a.count > b.count ? -1 : 1
}

const useStyles = makeStyles(theme => ({
  toolBar: {
    [theme.breakpoints.down('sm')]: {
      paddingRight: theme.spacing(0.5),
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  contrastColor: {
    minWidth: 50,
    color: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(1),
  },
  title: {
    color: theme.palette.primary.contrastText,
    marginRight: 'auto',
    fontSize: '130%',
    marginLeft: 0,
  },
  titleHighlight: {
    color: theme.palette.secondary.main,
  },
  icon: {
    marginRight: theme.spacing(-0.5),
    marginLeft: theme.spacing(0.5),
  },
  count: {
    paddingLeft: theme.spacing(0.5),
  },
}))

/**
 * Return list of tags to show in dropdown
 * @param {array} tags - tags sorted in order of count
 */
function getTopTags(tags) {
  const PERMANENT_TAG_SLUGS = ['women', 'spanish', 'chinese']
  const topTags = tags.slice(0, 10)
  // just loop through all the rest lol
  tags.slice(10).forEach(tag => {
    if (PERMANENT_TAG_SLUGS.includes(tag.slug)) {
      topTags.push(tag)
    }
  })
  return topTags
}

export default function Navbar() {
  const { materials, tagCounts } = useData()

  const tags = Object.keys(tagCounts)
    .map(key => new Tag(key, tagCounts[key]))
    .sort(tagCompareFn)

  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)
  const closeDrawer = () => setIsOpen(false)
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null)
  const [menu, setMenu] = React.useState(null)

  const handleMenuClick = nextMenu => event => {
    setMenuAnchorEl(event.currentTarget)
    setMenu(nextMenu)
  }

  const handleMenuClose = () => {
    setMenuAnchorEl(null)
    setMenu(null)
  }

  const tagsMenu = tags ? (
    <Fragment>
      <Button
        aria-controls="tags-menu"
        aria-haspopup="true"
        onClick={handleMenuClick('tags-menu')}
        className={classes.contrastColor}
      >
        Tags <ExpandMoreIcon className={classes.icon} />
      </Button>
      <Menu
        id="tags-menu"
        anchorEl={menuAnchorEl}
        keepMounted
        open={menu === 'tags-menu'}
        onClose={handleMenuClose}
      >
        <MenuItem component={AdapterLink} to="/tags" onClick={handleMenuClose}>
          All Tags
        </MenuItem>
        {getTopTags(tags).map(tag => {
          return (
            <MenuItem
              component={AdapterLink}
              to={tag.url}
              key={tag.tag}
              onClick={handleMenuClose}
            >
              {tag.title}
              <Typography
                className={classes.count}
                variant="caption"
                color="textSecondary"
              >
                ({tag.count})
              </Typography>
            </MenuItem>
          )
        })}
        <MenuItem component={AdapterLink} to="/tags" onClick={handleMenuClose}>
          All Tags
        </MenuItem>
      </Menu>
    </Fragment>
  ) : null

  return (
    <Fragment>
      <Drawer open={isOpen} onClose={closeDrawer}>
        <div
          className={classes.list}
          role="presentation"
          onClick={closeDrawer}
          onKeyDown={closeDrawer}
        >
          <List>
            <ListItem component={AdapterLink} to={'/'} button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem component={AdapterLink} to={'/tags'} button>
              <ListItemText primary="Tags" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem component={AdapterLink} to="/all" button>
              <ListItemText primary="All the Prints" />
            </ListItem>
            {Object.keys(MATERIAL_FOLDERS).map(folderKey => {
              const folder = MATERIAL_FOLDERS[folderKey]
              if (folder.hide) {
                return null
              }
              return (
                <ListItem
                  component={AdapterLink}
                  to={folder.url}
                  button
                  key={folderKey}
                >
                  <ListItemText primary={folder.title} />
                </ListItem>
              )
            })}
          </List>
          <Divider />
          <List>
            <ListItem component={AdapterLink} to={'/about/'} button>
              <ListItemText primary="FAQ" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <AppBar position="static">
        <Toolbar
          classes={{
            root: classes.toolBar,
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Button component={AdapterLink} to="/" className={classes.title}>
            YANG<span className={classes.titleHighlight}>PRINTS</span>
          </Button>

          <Hidden mdDown>
            <Button
              component={AdapterLink}
              to="/all"
              className={classes.contrastColor}
            >
              All the Prints
            </Button>
          </Hidden>
          <Hidden xsDown>
            <Button
              aria-controls="format-menu"
              aria-haspopup="true"
              onClick={handleMenuClick('format-menu')}
              className={classes.contrastColor}
            >
              Formats <ExpandMoreIcon className={classes.icon} />
            </Button>
            <Menu
              id="format-menu"
              anchorEl={menuAnchorEl}
              keepMounted
              open={menu === 'format-menu'}
              onClose={handleMenuClose}
            >
              <MenuItem
                component={AdapterLink}
                to="/all"
                onClick={handleMenuClose}
              >
                All
              </MenuItem>
              {Object.keys(MATERIAL_FOLDERS).map(folderKey => {
                const folder = MATERIAL_FOLDERS[folderKey]
                if (folder.hide) {
                  return null
                }
                return (
                  <MenuItem
                    component={AdapterLink}
                    to={folder.url}
                    key={folderKey}
                    onClick={handleMenuClose}
                  >
                    {folder.title}
                  </MenuItem>
                )
              })}
            </Menu>
            {tagsMenu}
            <Button
              component={AdapterLink}
              to="/about"
              className={classes.contrastColor}
            >
              FAQ
            </Button>
          </Hidden>

          <IconButton
            rel="noreferrer noopener"
            target="_blank"
            color="inherit"
            component={'a'}
            aria-label="twitter"
            href="https://twitter.com/yangprints"
          >
            <TwitterIcon />
          </IconButton>
          {materials && <SearchWidget materials={materials} />}
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}
