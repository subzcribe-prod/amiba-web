import React, { useState } from "react";
import {
  CssBaseline,
  Card,
  CardContent,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SimpleSelect from "./SimpleSelect";
import { useHistory } from "react-router-dom";
import { addEndpoint, addVersion } from "../../axios/endpoints";

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

export default function AddVersion({ requestType, endpointDetails }) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [statuscode, setStatuscode] = useState(200);
  const [responseJson, setResponseJson] = useState(``);
  const [requestJson, setRequestJson] = useState(null);

  const history = useHistory();

  const handleClick = async () => {
    try {
      let user = JSON.parse(localStorage.user);
      let data = {
        name: name,
        statusCode: statuscode,
        response: responseJson,
        endpointId: user.endpointId,
      };
      if (requestType === "POST") data.request = requestJson;
      const res = await addVersion(data, user.token);
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <>
      <CssBaseline />
      <Card className={classes.card}>
        <CardContent>
          <TextField
            className={classes.versionname}
            variant="standard"
            placeholder="Version Name *"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {requestType === "POST" && (
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
