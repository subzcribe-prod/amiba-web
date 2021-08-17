import React from "react";
import { useParams } from "react-router-dom";
import { CssBaseline, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ControlledAccordion from "../components/Project/ControlledAccordion";
import { useSelector } from "react-redux";

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
  const projects = useSelector((state) => state.projects);
  console.log(projects);
  const project = projects.filter(
    ({ name }) => name && name.toLowerCase() === projectname.toLowerCase()
  )[0];
  console.log(project);
  const classes = useStyles();
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
        <ControlledAccordion />
      </div>
    </Container>
  );
}
