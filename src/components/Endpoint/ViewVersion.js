import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import Switch from "./Switch";

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
  const {
    name,
    responseCode,
    response,
    request,
    _id: id,
    isActive,
    setCheckedList,
  } = props;
  console.log("view version", props);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box className={classes.header}>
          {name && (
            <Typography variant="h5" component="h2">
              Version : {name}
            </Typography>
          )}
          <Switch id={id} isActive={isActive} setCheckedList={setCheckedList} />
        </Box>
        {request && <Typography>Request : {request}</Typography>}
        {responseCode && <Typography>Response Code: {responseCode}</Typography>}
        {response && <Typography>Response: {response}</Typography>}
      </CardContent>
    </Card>
  );
}
