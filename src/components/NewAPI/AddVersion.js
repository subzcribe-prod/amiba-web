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
import { useDispatch, useSelector } from "react-redux";
import { addVersion } from "../../redux/actions/versions";
import { useHistory } from "react-router-dom";

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

export default function AddVersion() {
  const classes = useStyles();
  const [name, setName] = useState("Get all users");
  const [statuscode, setStatuscode] = useState(200);
  const [responseJson, setResponseJson] = useState(`{"":""}`);
  const [requestJson, setRequestJson] = useState(null);
  const history = useHistory();

  const projectslug = history.location.pathname.split("/")[2];
  const projects = useSelector((state) => state.projects);
  const project = projects.find(
    ({ slug }) => slug && slug.toLowerCase() === projectslug.toLowerCase()
  );
  const user = useSelector((state) => state.user);
  const apis = useSelector((state) => state.apis);
  let api;
  if (project) api = apis.find((a) => a.projectId === project._id);

  const versions = useSelector((state) => state.versions);

  // console.log(project);

  const dispatch = useDispatch();

  const handleClick = async () => {
    const version = { name, statuscode, response: responseJson };
    version.request = requestJson ? requestJson : undefined;
    const data = { projectId: project._id, ...api, version, token: user.token };
    console.log(data);
    try {
      const res = await addVersion(data);
      console.log(res);
      dispatch({
        type: "ADD_NEW_VERSION",
        payload: {
          name: name,
          statusCode: statuscode,
          response: responseJson,
          request: requestJson,
          projectId: project.projectId,
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  if (!Boolean(api)) return <Typography>Create API first.</Typography>;

  return (
    <>
      <CssBaseline />
      <Card className={classes.card}>
        <CardContent>
          {versions && (
            <>
              <Typography variant="h5" component="span">
                Version {versions.length}
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
          {/* {api.type === "POST" && (
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
          )} */}
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
