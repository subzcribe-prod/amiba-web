import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  ListItemIcon,
  Toolbar,
  Typography,
  ListItemText,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AddIcon from "@material-ui/icons/Add";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const section1 = [
  { text: "Sign up", icon: <PersonAddIcon />, link: "/signup" },
  { text: "Login", icon: <AccountBoxIcon />, link: "/signin" },
];
const section2 = [
  { text: "Dashboard", icon: <DashboardIcon />, link: "/" },
  { text: "Create new project", icon: <AddIcon />, link: "/newproject" },
  { text: "Starred", icon: <AccountBoxIcon />, link: "#" },
  { text: "Send email", icon: <PersonAddIcon />, link: "#" },
  { text: "Drafts", icon: <AccountBoxIcon />, link: "#" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  titleLink: {
    textDecoration: "inherit",
    color: "inherit",
  },
  title: {
    paddingTop: 11,
    paddingBottom: 11,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  // },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    display: "flex",
    textDecoration: "inherit",
    color: "inherit",
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const { title } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  console.log(theme.breakpoints.up);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Link to="/" className={classes.titleLink}>
        <Typography variant="h4" align="center" className={classes.title}>
          Amiba
        </Typography>
      </Link>
      <Divider />
      <List>
        {section1.map(({ text, icon, link }, index) => (
          <Link className={classes.link} to={link} key={text}>
            <ListItem button>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {section2.map(({ text, icon, link }, index) => (
          <Link className={classes.link} to={link} key={text}>
            <ListItem button>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
