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
  const { name, description, slug } = props;

  const handleClick = () => {
    let user = JSON.parse(localStorage.user);
    user.projectId = props._id;
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
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
