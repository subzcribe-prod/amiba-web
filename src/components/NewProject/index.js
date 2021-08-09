import React from "react";
import { Button, CssBaseline, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from "./TextInput";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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
}));

export default function NewProject() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Project Details
        </Typography>
        <form className={classes.form} noValidate>
          <TextInput name="projectname" label="Project Name" autoFocus />
          <TextInput name="projectdesc" label="Project Description" />
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
