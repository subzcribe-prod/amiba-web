import React from "react";
import { TextField } from "@material-ui/core";

export default function TextInput({ name, label, autoFocus }) {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      id={name}
      label={label}
      name={name}
      autoFocus={autoFocus ? true : false}
    />
  );
}
