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
import { getAuthenticatedUser } from "../../helper functions/auth";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
  title: {
    fontSize: 14,
  },
  addMb: {
    margin: 0,
    marginBottom: theme.spacing(2),
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

const checkJson = (json) => {
  // const stringified = JSON.stringify(json);
  try {
    const parsed = JSON.parse(json);
    if (Array.isArray(parsed)) {
      const stringified = JSON.stringify(json);
      return {
        parsed,
        stringified,
        valid: true,
      };
    }
    return { valid: false, stringified: null, parsed: null };
  } catch (error) {}
  return { valid: false, stringified: null, parsed: null };
};

export default function AddVersion({ requestType, endpointDetails, edit }) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [statuscode, setStatuscode] = useState(200);
  const [responseJson, setResponseJson] = useState(``);
  const [requestJson, setRequestJson] = useState(null);

  const history = useHistory();

  const handleClick = async () => {
    // check if the json entered is valid or not
    const { valid: resValid, stringified: resStringified } =
      checkJson(responseJson);
    if (!resValid)
      return alert("please enter a valid response json. it must be an array.");
    // if json is valid store stringified json in state
    // same:check json and stoe in state
    if (requestType === "POST") {
      const { valid: reqValid, stringified: reqStringified } =
        checkJson(requestJson);
      if (!reqValid) return alert("please enter a valid request json");
    }
    try {
      // first version while creating endpoint
      if (endpointDetails) {
        // get user from local storage
        let user = getAuthenticatedUser();
        let version = {
          name: name,
          response: responseJson,
          responseCode: statuscode,
        };
        if (requestType === "POST") version.request = requestJson;
        const data = {
          projectId: user.projectId,
          ...endpointDetails,
          version,
        };
        const res = await addEndpoint(data, user.token);
        if (res.status === 200) {
          const url = window.location.pathname
            .split("/")
            .splice(0, 3)
            .join("/");
          history.push(`${url}`);
          // console.log("response from add version, new endpoint: ", res);
        }
      }
      // add version
      else {
        let user = getAuthenticatedUser();
        let data = {
          name: name,
          responseCode: statuscode,
          response: responseJson,
          endpointId: user.endpointId,
        };
        if (requestType === "POST") data.request = requestJson;
        const res = await addVersion(data, user.token);
        if (res.status === 200) {
          window.location.reload();
        }
      }
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
            className={`${classes.versionname} ${classes.addMb}`}
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
              className={classes.addMb}
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
              className={classes.addMb}
            />
          </div>
          <div>
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              onClick={handleClick}
            >
              create endpoint
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
