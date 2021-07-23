import { BrowserRouter, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "@fontsource/roboto/500.css";

import ReduxSample from "./redux/redux-sample";

import {
  AppBar,
  IconButton,
  List,
  ListItem,
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
    width: 300,
  },
  main: {
    flex: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">React App Sample</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <div className={classes.root}>
        <nav className={classes.nav}>
          <List>
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/redux">Redux</Link>
            </ListItem>
          </List>
        </nav>
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
