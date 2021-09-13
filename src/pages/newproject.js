import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { addProject } from "../axios/projects";
import {
  getAuthenticatedUser,
  updateAuthenticatedUser,
} from "../helper functions/auth";

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

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [slug, setSlug] = useState("");

  const handleName = (e) => {
    setProjectName(e.target.value);
    setSlug(e.target.value.toLowerCase().split(" ").join("-"));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let user = getAuthenticatedUser();
    try {
      const res = await addProject(
        {
          name: projectName,
          description: projectDescription,
          slug: slug,
          userId: user.userId,
        },
        user.token
      );
      if (res.status === 200) {
        const projectInDb = res.data.data;
        updateAuthenticatedUser("projectId", projectInDb._id);
        history.push(`/projects/${slug}`);
      }
    } catch (error) {
      console.log(error.response);
    }
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
            required
            fullWidth
            id="projectname"
            label="Project Name"
            name="projectname"
            autoFocus
            value={projectName}
            onChange={handleName}
            margin="normal"
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            id="projectdesc"
            label="Project Description"
            name="projectdesc"
            multiline
            rows={5}
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            margin="normal"
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            id="slug"
            label="Slug"
            name="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            margin="normal"
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
