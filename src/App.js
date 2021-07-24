import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "@fontsource/roboto/500.css";

import Nav from "./common/nav";
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  nav: {
    width: 240,
    fontSize: "1.2rem",
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
      <AppBar position="fixed">
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
      <Toolbar />
      <div className={classes.root}>
        <Hidden mdDown>
          <Nav />
        </Hidden>
        <div className={classes.main}>
          <Route exact path="/">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          </Route>
          <Route path="/redux" component={ReduxSample} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
