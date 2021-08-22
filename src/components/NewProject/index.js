import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    placeItems: "center",
    height: "100%",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textDecoration: "none",
  },
  apititle: {
    margin: "1em 0",
  },
  center: {
    textAlign: "center",
  },
}));

export default function NewProject() {
  const classes = useStyles();
  const history = useHistory();

  const [projectName, setProjectName] = useState("New Project");
  const [projectDescription, setProjectDescription] = useState(
    "Description of new project."
  );
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_PROJECT",
      payload: { name: projectName, description: projectDescription },
    });
    history.push(`/projects/${projectName.toLowerCase()}`);
  }

  return (
    <Container component="main" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ADD NEW PROJECT
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="projectname"
            label="Project Name"
            name="projectname"
            autoFocus
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="projectdesc"
            label="Project Description"
            name="projectdesc"
            multiline
            rows={5}
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
          <div className={classes.center}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Create project
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}
