import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  getAuthenticatedUser,
  updateAuthenticatedUser,
} from "../../helper functions/auth";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AlertDialog from "./AlertDialog";
import { deleteEndpoint } from "../../axios/endpoints";

const useStyles = makeStyles({
  root: {
    height: "100%",
    padding: 16,
    position: "relative",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  removepadding: {
    padding: 0,
  },
  name: {
    marginBottom: 5,
  },
  description: {
    marginBottom: 3,
  },
  cardcontent: {
    marginBottom: 8,
  },
  deleteicon: {
    position: "relative",
    top: -10,
    right: -10,
  },
  editicon: {
    position: "relative",
    top: -10,
    right: -60,
  },
  cardtitle: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const {
    name,
    requestType,
    slug,
    versions,
    _id: endpointId,
    projectId,
    setForceUpdate,
  } = props;

  const history = useHistory();

  // go to clicked endpoint
  const handleClick = () => {
    // update local storage with details of clicked endpoint
    updateAuthenticatedUser("endpointId", props._id);
    history.push(`${window.location.pathname}/${slug}/view`);
  };

  const handleEdit = () => {
    // update local storage with details of clicked endpoint
    updateAuthenticatedUser("endpointId", props._id);
    // redirect to edit page
    history.push(`${window.location.pathname}/${slug}/edit`);
  };

  // state of dialog
  const [dialog, setDialog] = useState({
    open: false,
    clickedAgree: false,
  });

  // function to open dialog
  const openDialog = () => setDialog({ ...dialog, open: true });
  useEffect(() => {
    // function to delete endpoint
    const handleDelete = async () => {
      try {
        const data = { projectId };
        const user = getAuthenticatedUser();
        await deleteEndpoint(endpointId, data, user.token);
        // update state of parent component (Project [/pages/project]) to get updated result from the db
        setForceUpdate({});
      } catch (error) {
        console.log(error.response);
      }
    };
    // if agree is clicked, complete deletion(call function)
    if (dialog.clickedAgree) {
      handleDelete();
    }
  }, [dialog]);

  return (
    <>
      <Card className={classes.root}>
        <CardContent
          className={`${classes.removepadding} ${classes.cardcontent}`}
        >
          <Typography variant="h5" component="h2" className={classes.cardtitle}>
            {name}
            {/* open cofirmation alert when dete icon is clicked */}
            <IconButton
              className={classes.editicon}
              onClick={() => {
                handleEdit();
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              className={classes.deleteicon}
              onClick={() => {
                openDialog();
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Typography>
          <Typography variant="body2" component="p">
            Request type: {requestType}
          </Typography>
          <Typography variant="body2" component="p">
            Slug: {slug}
          </Typography>
          <Typography variant="body2" component="p">
            Number of versions: {versions.length}
          </Typography>
        </CardContent>
        <CardActions className={classes.removepadding}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={handleClick}
          >
            Go to endpoint
          </Button>
        </CardActions>
      </Card>
      <AlertDialog dialog={dialog} setDialog={setDialog} />
    </>
  );
}
