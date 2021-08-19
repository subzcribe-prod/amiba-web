import React, { useState } from "react";
import {
  CssBaseline,
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SimpleSelect from "./SimpleSelect";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    margin: "1em 0",
  },
}));

export default function Version({ versionNumber, apiType }) {
  const classes = useStyles();
  const [statuscode, setStatuscode] = useState(200);

  const handleClick = () => {
    console.log("Version created");
    alert("Version created!!");
  };

  return (
    <Container component="main">
      <CssBaseline />
      <Card className={classes.card}>
        <CardContent>
          {versionNumber && (
            <Typography variant="h5">Version {versionNumber}</Typography>
          )}
          {apiType === "POST" && <TextField label="Request JSON" />}
          <SimpleSelect
            title="Response Code"
            options={[200, 400, 500]}
            defaultValue={200}
            value={statuscode}
            setValue={setStatuscode}
          />
          <TextField label="Any valid JSON" />
          <Button variant="contained" color="primary" onClick={handleClick}>
            create version
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
