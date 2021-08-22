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

export default function Home({ projects }) {
  const classes = useStyles();
  console.log("projects from home component", projects);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {projects.map((item, index) => {
          if (item && item.name && item.description) {
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
