import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Textarea({ label, defaultValue }) {
  const classes = useStyles();
  // const [value, setValue] = React.useState("Controlled");

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-multiline-static"
        label={label}
        multiline
        rows={4}
        variant="outlined"
      />
    </form>
  );
}
