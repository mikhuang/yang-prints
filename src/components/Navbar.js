import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import React, { Fragment, useState } from 'react'
import { Link } from '../components/Router'
import { MATERIAL_FOLDERS } from '../entities/Material'

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
            <ListItem component={Link} to={'/'} button>
              <ListItemText primary="Home" />
            </ListItem>
          </List>
          <Divider />
          <List>
            {Object.keys(MATERIAL_FOLDERS).map(folderKey => {
              const folder = MATERIAL_FOLDERS[folderKey]
              return (
                <ListItem
                  component={Link}
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
            <ListItem component={Link} to={'/about/'} button>
              <ListItemText primary="About" />
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

          <Typography variant="h6" className={classes.title}>
            <Link to={'/'}>
              <span style={{ color: 'white' }}>Yang Prints</span>
            </Link>
          </Typography>

          <Button component={Link} to="/about" color="inherit">
            About
          </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}
