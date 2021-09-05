import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import CardAdd from "./CardAdd";
import { useSelector } from "react-redux";

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

export default function Home() {
  const classes = useStyles();
  const projects = useSelector((state) => state.projects);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {projects &&
          projects.map((item, index) => {
            if (item && item.name) {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  lg={4}
                  key={`project-card-${item.name}-${index}`}
                >
                  <Card {...item} />
                </Grid>
              );
            } else return null;
          })}
        <Grid item xs={12} sm={6} md={3} lg={4}>
          <CardAdd />
        </Grid>
      </Grid>
    </div>
  );
}
