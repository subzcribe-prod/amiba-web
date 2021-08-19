import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   button: {
//   },
// }));

export default function AddAPI({ project }) {
  // const classes = useStyles();
  const history = useHistory();

  function handleClick() {
    history.push(`/projects/${project.name}/addapi`);
  }

  // /project-name/addapi

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        fullWidth
        onClick={handleClick}
      >
        Add api
      </Button>
    </>
  );
}
