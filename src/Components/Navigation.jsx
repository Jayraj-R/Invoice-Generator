import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {    
    Drawer,
    AppBar,
    Toolbar,
    List,
    CssBaseline,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText

} from '@material-ui/core';

import FaceIcon from '@material-ui/icons/Face';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PostAddIcon from '@material-ui/icons/PostAdd';

import {Switch, Route, Link, useHistory} from 'react-router-dom'
import Customers from './Customers'
import ManageInvoices from './ManageInvoices'
import InvoiceItems from './InvoiceItems';



const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Navigation(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const lists = [
      {
          id:1,
          title:"Manage Customer",
          icon: <FaceIcon/>,
          link:"/Invoice-Generator/"
      },
      {
        id:2,
        title:"Add Invoices Items",
        icon:<PostAddIcon/>,
        link:"/Invoice-Generator/invoiceItems"
      }, 
      {
        id:3,
        title:"Manage Invoices",
        icon:<ReceiptIcon/>,
        link:"/Invoice-Generator/invoice"
    },
  ]
  const history = useHistory()
  
  return (
    <div className={classes.root}>

      <CssBaseline />
      <AppBar position="fixed" color="primary" className={clsx(classes.appBar, {[classes.appBarShift]: open,})}>
        <Toolbar>

          {/*------------------------------ MENU AND LOGO ----------------------- */}
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap>
            Wrytin
          </Typography>

        </Toolbar>
      </AppBar>
          
      {/* --------------------------- SIDE NAVBAR ------------------------------- */}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >

        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>

        <Divider />

        {/* ---------------------------- LINKS ------------------------------------- */}
        <List>
          {lists.map((list) => (
            <Link onClick={() => {history.push(`${list.link}`)}}>
              <ListItem button key={list.title}>
                <ListItemIcon>{list.icon}</ListItemIcon>
                <ListItemText primary={list.title} />
              </ListItem>
            </Link>
          ))}
        </List>

      </Drawer>

      {/* ------------------------------ CONTENT ---------------------------------------  */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
              <Switch>
                <Route exact path="/Invoice-Generator/" component={Customers} />

                <Route exact path="/Invoice-Generator/invoice">
                  <Typography paragraph>
                    <ManageInvoices/>
                  </Typography>
                </Route>

                <Route exact path="/Invoice-Generator/invoiceItems">
                  <Typography paragraph>
                    <InvoiceItems/>
                  </Typography>
                </Route>

            </Switch>
        
      </main>
    </div>
  );
}
