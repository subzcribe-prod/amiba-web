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
  versionname: {
    marginLeft: theme.spacing(2),
    "& input": { paddingTop: 4, fontSize: "1.3em" },
  },
}));

export default function AddVersion({ versionNumber, apiType }) {
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
            <>
              <Typography variant="h5" component="span">
                Version {versionNumber}
              </Typography>
              <TextField
                className={classes.versionname}
                variant="standard"
                placeholder="Version Name *"
                required
              />
            </>
          )}
          {apiType === "POST" && (
            <TextField
              label="Request JSON"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
              required
            />
          )}
          <div>
            <SimpleSelect
              title="Response Code"
              options={[200, 400, 500]}
              defaultValue={200}
              value={statuscode}
              setValue={setStatuscode}
            />
          </div>
          <div>
            <TextField
              label="Response"
              fullWidth
              multiline
              rows={10}
              variant="outlined"
              margin="normal"
              placeholder="Enter response JSON here"
              required
            />
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={handleClick}>
              create version
            </Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
