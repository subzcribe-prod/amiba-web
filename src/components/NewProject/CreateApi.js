import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from "./TextInput";
import SimpleSelect from "./SimpleSelect";
import Version from "./Version";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
}));

export default function CreateApi() {
  const classes = useStyles();

  return (
    <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextInput name="apiName" label="API Name" />
          <TextInput name="endpoint" label="Endpoint (URL)" />
          <SimpleSelect
            title="API Type"
            options={["GET", "POST", "PUT", "DELETE"]}
          />
          {/* VERSIONS */}
          <Version />
        </form>
      </div>
    </Container>
  );
}
