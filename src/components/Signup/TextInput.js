import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export default function TextInput({
  label,
  autofocus,
  value,
  setValue,
  validator,
}) {
  const name = label.toLowerCase().split(" ").join("-");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    setError(validator(e.target.value));
  };
  return (
    <>
      <TextField
        autoFocus={autofocus === true}
        name={name}
        variant="outlined"
        required
        fullWidth
        id={name}
        label={label}
        value={value}
        onChange={handleChange}
        error={Boolean(error)}
        helperText={error}
      />
    </>
  );
}
