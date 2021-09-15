import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function CustomSwitch({ id, isActive, setCheckedList }) {
  const handleChange = (e) => {
    setCheckedList((state) => {
      const obj = { ...state };
      Object.keys(obj).forEach((k) => (obj[k] = false));
      return { ...obj, [id]: true };
    });
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={isActive}
          onChange={handleChange}
          color="primary"
          name="checked"
          disabled={isActive}
        />
      }
      label={"isActive"}
    />
  );
}
