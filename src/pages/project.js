import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CssBaseline, Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EndpointContainer from "../components/Project/EndpointContainer";
import Error404 from "../components/error404";
import { findProject } from "../helper functions/utils";
import { getProjectDetails } from "../axios/projects";
import AddEndpoint from "../components/Project/AddEndpoint";

const useStyles = makeStyles((theme) => ({
  container: {},
  paper: {
    display: "flex",
    flexDirection: "column",
  },
  projectname: {
    textTransform: "capitalize",
    width: 300,
  },
}));

export default function Project() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const history = useHistory();

  async function load() {
    const user = JSON.parse(localStorage.user);
    try {
      const res = await getProjectDetails(user.projectId, user.token);
      const projectFromDb = res.data.data;
      setProject(projectFromDb);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const classes = useStyles();

  if (loading) return <h1>Loading..</h1>;

  if (error) return <h1>Error occured</h1>;

  if (project)
    return (
      <Container component="main" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography variant="h5">PROJECT DETAILS</Typography>
          <Typography variant="h6" className={classes.projectname}>
            project name: {project.name}
          </Typography>
          <Typography variant="h6">{project.description}</Typography>
          <Typography variant="h6">API details</Typography>

          {project.endpoints.length === 0 && (
            <Typography>Create endpoints to be viewed here.</Typography>
          )}
          <EndpointContainer endpoints={project.endpoints} />

          <Button
            onClick={() =>
              history.push(`${window.location.pathname}/endpoint/add`)
            }
            variant="contained"
            color="primary"
          >
            Add endpoint
          </Button>
        </div>
      </Container>
    );

  return null;
}
