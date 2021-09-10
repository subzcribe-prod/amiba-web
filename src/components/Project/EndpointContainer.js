import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import Error404 from "../error404";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  container: {
    marginBottom: theme.spacing(2),
  },
}));

export default function ControlledAccordion({ endpoints, project }) {
  const classes = useStyles();

  if (!endpoints) return <Error404 />;

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        {endpoints.map((item, index) => {
          if (item && item.name) {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={`endpoint-${item.name}-${index + 1}`}
              >
                <Card {...item} />
              </Grid>
            );
          } else return null;
        })}
      </Grid>
    </div>
  );
}
