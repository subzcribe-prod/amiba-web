import React, { useState } from "react";
import { TextField } from "@material-ui/core";
const _ = require("lodash");

export default function TextInput(props) {
  const { label, setValue, validator } = props;
  const passProps = _.omit(props, ["validator", "setValue"]);
  const name = label.toLowerCase().split(" ").join("-");
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    setError(validator(e.target.value));
  };
  return (
    <>
      <TextField
        {...passProps}
        name={name}
        variant="outlined"
        required
        fullWidth
        id={name}
        onChange={handleChange}
        error={Boolean(error)}
        helperText={error}
      />
    </>
  );
}
