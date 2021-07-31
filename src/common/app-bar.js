import {
  AppBar as MuiAppBar,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "calc(100% - 64px)",
  },
  appBar: {
    maxHeight: "64px",
  },
  main: {
    flex: 1,
  },
}));

export default function AppBar(props) {
  const classes = useStyles();

  return (
    <MuiAppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <Hidden lgUp>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => props.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h6">React App Sample</Typography>
      </Toolbar>
    </MuiAppBar>
  );
}
