import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { updateActiveVersion } from "../../axios/endpoints";
import { getAuthenticatedUser } from "../../helper functions/auth";
import { Typography } from "@material-ui/core";

export default function CustomSwitch({ id, isActive, setCheckedList }) {
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    try {
      setLoading(true);
      const user = getAuthenticatedUser();
      const data = {
        endpointId: user.endpointId,
        activeVersion: id,
      };
      const res = await updateActiveVersion(data, user.token);
      if (res.status === 200) {
        setLoading(false);
        setCheckedList((state) => {
          const obj = { ...state };
          Object.keys(obj).forEach((k) => (obj[k] = false));
          return { ...obj, [id]: true };
        });
      }
    } catch (error) {
      setLoading(false);
      console.error(error.response);
    }
  };

  if (loading) return <Typography>Loading..</Typography>;

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
