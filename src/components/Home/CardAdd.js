import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, IconButton } from "@material-ui/core";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: "100%",
    display: "grid",
    placeItems: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Link to="/newproject">
          <IconButton>
            <AddCircleOutlinedIcon fontSize="large" />
          </IconButton>
        </Link>
      </CardContent>
    </Card>
  );
}
