import React, { useState } from "react";
import {
  CssBaseline,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SimpleSelect from "./SimpleSelect";
import { useDispatch } from "react-redux";

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
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function AddVersion({ versionNumber, apiType }) {
  const classes = useStyles();
  const [name, setName] = useState("Get all users");
  const [statuscode, setStatuscode] = useState(200);
  const [responseJson, setResponseJson] = useState(`{"":""}`);
  const [requestJson, setRequestJson] = useState(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "ADD_NEW_VERSION",
      payload: {
        name: name,
        statusCode: statuscode,
        response: responseJson,
        request: requestJson,
      },
    });
  };

  return (
    <>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              required
              value={requestJson}
              onChange={(e) => setRequestJson(e.target.value)}
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
              placeholder="Enter response JSON here"
              required
              value={responseJson}
              onChange={(e) => setResponseJson(e.target.value)}
            />
          </div>
          <div>
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              onClick={handleClick}
            >
              create version
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
