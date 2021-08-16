import React from "react";
import {
  CssBaseline,
  Container,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from "../TextInput";
import Textarea from "./Textarea";
import SimpleSelect from "../SimpleSelect";

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

export default function Version({ name, label }) {
  const classes = useStyles();

  return (
    <Container component="main">
      <CssBaseline />
      <Card className={classes.card}>
        <CardContent>
          {/* title with active checkbox */}
          <Typography variant="h5">{name}</Typography>
          {/* request textarea if request type is POST */}
          <Textarea label={"Request JSON"} />
          {/* textarea - json */}

          {/* title - response */}
          {/* select - response code */}
          <SimpleSelect
            title="Response Code"
            options={[200, 400, 500]}
            defaultValue={200}
          />
          {/* textarea - response json (payload) */}
          <Textarea label={"Any valid JSON"} />
        </CardContent>
      </Card>
      <Card></Card>
    </Container>
  );
}
