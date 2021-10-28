import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
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
  link: { textDecoration: "none" },
  removepadding: {
    padding: 0,
  },
  name: {
    marginBottom: 5,
  },
  description: {
    marginBottom: 3,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { name, description, slug } = props;

  const handleClick = () => {
    updateAuthenticatedUser("projectId", props._id);
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.removepadding}>
        <Typography variant="h5" component="h2" className={classes.name}>
          {name}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className={classes.description}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.removepadding}>
        <Link to={`/projects/${slug}`} className={classes.link}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={handleClick}
          >
            Go to project
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
