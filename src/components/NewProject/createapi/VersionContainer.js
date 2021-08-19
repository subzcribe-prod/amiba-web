import { Grid } from "@material-ui/core";
import React from "react";
import Version from "./Version";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function VersionContainer({ versions }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {versions.map((item, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Version {...item} key={item.name} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
