import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "@fontsource/roboto/500.css";

import Nav from "./common/nav";
import Home from "./home/home";
import ReduxSample from "./redux/redux-sample";

import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Form from "./form/form";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "calc(100% - 64px)",
  },
  main: {
    flex: 1,
  },
}));

function App() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    drawerVisible: false,
  });

  function toggleDrawer(open) {
    setState({ drawerVisible: open });
  }

  return (
    <BrowserRouter>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6">React App Sample</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={state.drawerVisible}
        onClose={() => toggleDrawer(false)}
      >
        <Nav />
      </Drawer>
      <div className={classes.root}>
        <Hidden mdDown>
          <Nav />
        </Hidden>
        <div className={classes.main}>
          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/redux" component={ReduxSample} />
            <Route path="/form" component={Form} />
            <Route component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
