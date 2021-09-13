import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link: { textDecoration: "none" },
});

export default function ViewVersion(props) {
  const classes = useStyles();
  const { name, responseCode, response, request } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        {name && (
          <Typography variant="h5" component="h2">
            Version : {name}
          </Typography>
        )}
        {request && <Typography>Request : {request}</Typography>}
        {responseCode && <Typography>Response Code: {responseCode}</Typography>}
        {response && <Typography>Response: {response}</Typography>}
      </CardContent>
    </Card>
  );
}
