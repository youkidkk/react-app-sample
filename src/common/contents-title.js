import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "1rem 1rem",
    padding: "0.5rem 1.0rem",
    borderLeft: "5px solid #000077",
    background: "#eeeeff",
  },
}));

export default function ContentsTitle(props) {
  const classes = useStyles();

  return (
    <Typography variant="h4" className={classes.title}>
      {props.title}
    </Typography>
  );
}
