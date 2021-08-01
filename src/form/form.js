import React, { useState } from "react";

import { Button, MenuItem, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ContentsTitle from "../common/contents-title";
import ConfirmDialog from "./confirm-dialog";

const useStyles = makeStyles((theme) => ({
  inputForm: {
    "& .MuiTextField-root": {
      margin: "0.5rem 0.3rem",
    },
  },
}));

const initialFormState = {
  firstName: "",
  lastName: "",
  gender: "",
  birthday: "1980-01-01",
};

export default function Form(props) {
  const classes = useStyles();

  const [formState, setFormState] = useState(initialFormState);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleConfirmOk = () => {
    setOpen(false);
  };

  const handleConfirmCancel = () => {
    setOpen(false);
  };

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
      <ConfirmDialog
        formInput={formState}
        open={open}
        onClose={() => setOpen(false)}
        onConfirmOk={handleConfirmOk}
        onConfirmCancel={handleConfirmCancel}
      />
    </React.Fragment>
  );
}
