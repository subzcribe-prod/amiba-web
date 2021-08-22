import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel, FormControl, Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({
  title,
  options,
  defaultValue,
  value,
  setValue,
}) {
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
          label={title}
          margin="normal"
          required
        >
          {options.length &&
            options.map((type, index) => (
              <MenuItem key={`options-${type}-${index + 1}`} value={type}>
                {type}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
}
