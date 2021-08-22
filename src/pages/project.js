import React from "react";
import { useParams } from "react-router-dom";
import { CssBaseline, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ControlledAccordion from "../components/Project/ControlledAccordion";
import { useSelector } from "react-redux";
import Error404 from "../components/error404";

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
  const { projectname } = useParams();
  // redux state
  const projects = useSelector((state) => state.projects);
  const apis = useSelector((state) => state.apis);
  // console.log(projects);
  const project = projects.filter(
    ({ name }) => name && name.toLowerCase() === projectname.toLowerCase()
  )[0];
  console.log(project);
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
        <ControlledAccordion apis={apis} project={project} />
      </div>
    </Container>
  );
}
