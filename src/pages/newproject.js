import React from "react";
import { Button, CssBaseline, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from "../components/NewProject/TextInput";
import ControlledAccordion from "../components/NewProject/ControlledAccordion";

import newprojectStyles from "./styles/newproject";

const useStyles = makeStyles(newprojectStyles);

export default function NewProject() {
  const classes = useStyles();

  return (
    <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Project Details
        </Typography>
        <form className={classes.form} noValidate>
          <TextInput name="projectname" label="Project Name" autoFocus />
          <TextInput name="projectdesc" label="Project Description" />
          <Typography variant="h5" className={classes.apititle}>
            API details
          </Typography>
          <ControlledAccordion />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create project
          </Button>
        </form>
      </div>
    </Container>
  );
}
