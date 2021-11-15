import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import Switch from "./Switch";
import EditIcon from "@material-ui/icons/Edit";
import { updateVersionDetails } from "../../axios/versions";
import { getAuthenticatedUser } from "../../helper functions/auth";
import checkJson from "../../util/checkjson";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link: { textDecoration: "none" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
}));

export default function ViewVersion(props) {
  const classes = useStyles();
  let {
    name,
    responseCode,
    response,
    request,
    _id: id,
    isActive,
    setCheckedList,
  } = props;

  // check if edit is clicked
  const [isEdit, setIsEdit] = useState(false);
  // details to be saved and sent to API to update version details
  const [editedDetails, setEditedDetails] = useState({
    name: name,
    responseCode: responseCode,
    response: response,
    request: request,
  });

  // helper funstion to update state of "editedDetails"
  const updateEditedDetails = (key, value) =>
    setEditedDetails((state) => ({ ...state, [key]: value }));

  // on click handler of update button
  const handleUpdate = async () => {
    // validate request and response json
    // both should be array
    const { valid: resValid } = checkJson(editedDetails.response);
    if (!resValid) return alert("Please enter a valid array!");
    if (request) {
      const { valid: reqValid } = checkJson(editedDetails.request);
      if (!reqValid) return alert("Please enter a valid array!");
    }
    try {
      const user = getAuthenticatedUser();
      // data to send to backend to update the DB
      const data = {
        endpointId: user.endpointId,
        versionId: id,
        ...editedDetails,
      };
      await updateVersionDetails(data, user.token);
      window.location.reload();
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  if (isEdit)
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5">Edit version details</Typography>
          <Box>
            <TextField
              label="Name"
              value={editedDetails.name}
              onChange={(e) => updateEditedDetails("name", e.target.value)}
            />
          </Box>
          <Box>
            <TextField
              label="Response Code"
              value={editedDetails.responseCode}
              onChange={(e) =>
                updateEditedDetails("responseCode", e.target.value)
              }
            />
          </Box>
          {request && (
            <Box>
              <TextField
                label="Request JSON"
                value={editedDetails.request}
                onChange={(e) => updateEditedDetails("request", e.target.value)}
                multiline
                rows={4}
              />
            </Box>
          )}
          <Box>
            <TextField
              label="Response JSON"
              value={editedDetails.response}
              onChange={(e) => updateEditedDetails("response", e.target.value)}
              multiline
              rows={4}
            />
          </Box>
          <Box>
            <Button
              color="primary"
              variant="contained"
              style={{ marginTop: 8 }}
              onClick={handleUpdate}
            >
              update
            </Button>
          </Box>
        </CardContent>
      </Card>
    );

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box className={classes.header}>
          {name && (
            <Typography variant="h5" component="h2">
              Version : {name}
            </Typography>
          )}
          <Box>
            <IconButton
              style={{ marginRight: 10 }}
              onClick={() => setIsEdit(true)}
            >
              <EditIcon />
            </IconButton>
            <Switch
              id={id}
              isActive={isActive}
              setCheckedList={setCheckedList}
            />
          </Box>
        </Box>
        {request && <Typography>Request : {request}</Typography>}
        {responseCode && <Typography>Response Code: {responseCode}</Typography>}
        {response && <Typography>Response: {response}</Typography>}
      </CardContent>
    </Card>
  );
}
