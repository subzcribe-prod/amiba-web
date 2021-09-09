import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CssBaseline, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ControlledAccordion from "../components/Project/ControlledAccordion";
import { useSelector } from "react-redux";
import Error404 from "../components/error404";
import { useDispatch } from "react-redux";
import { loadProjects } from "../redux/dispatch/projects";
import { findProject } from "../helper functions/utils";
import { loadApis } from "../redux/dispatch/apis";

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
  const { projectslug } = useParams();
  const user = useSelector((state) => state.user);
  const projects = useSelector((state) => state.projects);
  const apis = useSelector((state) => state.apis);

  const dispatch = useDispatch();

  useEffect(() => {
    if (projects === null || projects.length === 0) {
      loadProjects(user, dispatch);
    }
  }, []);

  const project = findProject(projects, projectslug);

  useEffect(() => {
    if (
      project !== null &&
      (apis === null || apis.length === 0 || apis[project._id] === null)
    ) {
      loadApis(user.token, project._id, dispatch);
    }
  });

  const classes = useStyles();

  if (!project) return <Error404 />;

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
        {apis && apis[project._id] !== null && (
          <ControlledAccordion apis={apis[project._id]} project={project} />
        )}
      </div>
    </Container>
  );
}
