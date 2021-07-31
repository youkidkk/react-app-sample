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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("1980-01-01");

  function handleChange(event) {
    switch (event.target.id) {
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "birthday":
        setBirthday(event.target.value);
        break;
      default:
        break;
    }
  }

  function handleGenderSelect(event) {
    setGender(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(gender);
    console.log(birthday);
  }

  return (
    <React.Fragment>
      <ContentsTitle title="Form sample" />
      <form className={classes.inputForm} onSubmit={handleSubmit}>
        <div>
          <TextField
            id="lastName"
            label="姓"
            inputProps={{ required: true }}
            value={lastName}
            onChange={handleChange}
          />
          <TextField
            id="firstName"
            label="名"
            inputProps={{ required: true }}
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            id="gender"
            select
            label="性別"
            style={{ width: "4.0rem" }}
            inputProps={{ required: true }}
            value={gender}
            onChange={handleGenderSelect}
          >
            <MenuItem value="1">男性</MenuItem>
            <MenuItem value="2">女性</MenuItem>
            <MenuItem value="3">他</MenuItem>
          </TextField>
          <TextField
            id="birthDay"
            label="生年月日"
            type="date"
            inputProps={{ required: true }}
            value={birthday}
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
