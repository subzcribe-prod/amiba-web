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

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link: { textDecoration: "none" },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { name, requestType, slug, versions } = props;

  const history = useHistory();

  const handleClick = () => {
    let user = JSON.parse(localStorage.user);
    user.endpointId = props._id;
    localStorage.setItem("user", JSON.stringify(user));
    history.push(`${window.location.pathname}${slug}/view`);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
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
      <CardActions>
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
