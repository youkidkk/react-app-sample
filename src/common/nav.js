import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nav: {
    width: 240,
    fontSize: "1.2rem",
  },
}));

function Nav(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.nav}>
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/redux">Redux</Link>
          </ListItem>
        </List>
      </div>
    </React.Fragment>
  );
}

export default Nav;
