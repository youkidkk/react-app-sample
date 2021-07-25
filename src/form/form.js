import React from "react";

import { MenuItem, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  inputForm: {
    "& *": {
      margin: "0.2rem 0.3rem",
    },
  },
}));

export default function Form(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h3">Form sample</Typography>
      <form className={classes.inputForm}>
        <div>
          <TextField id="lastName" label="姓" />
          <TextField id="firstName" label="名" />
        </div>
        <div>
          <TextField id="age" label="年齢" type="number" />
        </div>
        <div>
          <TextField id="gender" select label="性別">
            <MenuItem />
            <MenuItem value={1}>男性</MenuItem>
            <MenuItem value={2}>女性</MenuItem>
            <MenuItem value={3}>他</MenuItem>
          </TextField>
        </div>
      </form>
    </React.Fragment>
  );
}
