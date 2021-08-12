import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "../components/Home/Card";
import CardAdd from "../components/Home/CardAdd";

import homeStyles from "./styles/home";
import { projects } from "./content/home";

const useStyles = makeStyles(homeStyles);

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {projects.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} lg={4} key={item.title}>
            <Card {...item} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={3} lg={4}>
          <CardAdd />
        </Grid>
      </Grid>
    </div>
  );
}
