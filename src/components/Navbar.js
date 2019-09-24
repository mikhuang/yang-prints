import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import MaterialLink from '@material-ui/core/Link'
import Hidden from '@material-ui/core/Hidden'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import React, { Fragment, useState } from 'react'
import { AdapterLink } from '../components/Router'
import { MATERIAL_FOLDERS } from '../entities/Material'
import cx from 'clsx'
const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(0.5),
  },
  title: {
    marginRight: 'auto',
    fontSize: '130%',
  },
  titleHighlight: {
    color: theme.palette.secondary.main,
  },
  contrastColor: {
    minWidth: 50,
    color: theme.palette.primary.contrastText,
  },
}))

export default function Navbar() {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)
  const closeDrawer = () => setIsOpen(false)
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
          </List>
          <Divider />
          <List>
            <ListItem component={AdapterLink} to="/all" button>
              <ListItemText primary="All" />
            </ListItem>
            {Object.keys(MATERIAL_FOLDERS).map(folderKey => {
              const folder = MATERIAL_FOLDERS[folderKey]
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
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Button
            component={AdapterLink}
            to="/"
            className={cx(classes.contrastColor, classes.title)}
          >
            YANG<span className={classes.titleHighlight}>PRINTS</span>
          </Button>

          <Hidden smDown>
            <Button
              component={AdapterLink}
              to="/all"
              className={classes.contrastColor}
            >
              All
            </Button>
            {Object.keys(MATERIAL_FOLDERS).map(folderKey => {
              const folder = MATERIAL_FOLDERS[folderKey]
              return (
                <Button
                  component={AdapterLink}
                  to={folder.url}
                  key={folderKey}
                  className={classes.contrastColor}
                >
                  {folder.shortTitle || folder.title}
                </Button>
              )
            })}
          </Hidden>
          <Button
            component={AdapterLink}
            to="/about"
            className={classes.contrastColor}
          >
            FAQ
          </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}
