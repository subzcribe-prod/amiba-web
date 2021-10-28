import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { updateAuthenticatedUser } from "../../helper functions/auth";

const useStyles = makeStyles({
  root: {
    height: "100%",
    padding: 16,
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
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { name, requestType, slug, versions } = props;

  const history = useHistory();

  const handleClick = () => {
    updateAuthenticatedUser("endpointId", props._id);
    history.push(`${window.location.pathname}/${slug}/view`);
  };

  return (
    <Card className={classes.root}>
      <CardContent
        className={`${classes.removepadding} ${classes.cardcontent}`}
      >
        <Typography variant="h5" component="h2">
          {name}
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
  );
}
