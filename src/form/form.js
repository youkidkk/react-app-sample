import React, { useState } from "react";

import { Button, MenuItem, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ContentsTitle from "../common/contents-title";

const useStyles = makeStyles((theme) => ({
  inputForm: {
    "& .MuiTextField-root": {
      margin: "0.5rem 0.3rem",
    },
  },
}));

export default function Form(props) {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    birthday: "1980-01-01",
  });

  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO
    console.log(formState);
  }

  return (
    <React.Fragment>
      <ContentsTitle title="Form sample" />
      <form className={classes.inputForm} onSubmit={handleSubmit}>
        <div>
          <TextField
            name="lastName"
            label="姓"
            inputProps={{ required: true }}
            value={formState.lastName}
            onChange={handleChange}
          />
          <TextField
            name="firstName"
            label="名"
            inputProps={{ required: true }}
            value={formState.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            name="gender"
            select
            label="性別"
            style={{ width: "4.0rem" }}
            inputProps={{ required: true }}
            value={formState.gender}
            onChange={handleChange}
          >
            <MenuItem value="1">男性</MenuItem>
            <MenuItem value="2">女性</MenuItem>
            <MenuItem value="3">他</MenuItem>
          </TextField>
          <TextField
            name="birthday"
            label="生年月日"
            type="date"
            inputProps={{ required: true }}
            value={formState.birthday}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button type="submit" variant="contained" color="primary">
            確認
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
}
