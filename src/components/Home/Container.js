import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import CardAdd from "./CardAdd";

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

const projects = [
  {
    name: "Project 1",
  },
  {
    name: "Project 2",
  },
  {
    name: "Project 3",
  },
  {
    name: "Project 4",
  },
];

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {projects.map(({ name }, index) => (
          <Grid item xs={12} sm={6} md={3} lg={4} key={name}>
            <Card name={name} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={3} lg={4}>
          <CardAdd />
        </Grid>
      </Grid>
    </div>
  );
}
