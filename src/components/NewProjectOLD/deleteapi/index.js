import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from "../TextInput";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

export default function DeleteApi() {
  const classes = useStyles();

  return (
    <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextInput name="apiName" label="API Name" />
          <TextInput name="endpoint" label="Endpoint (URL)" />
          <TextInput name="apiType" label="API Type" />
        </form>
      </div>
    </Container>
  );
}
