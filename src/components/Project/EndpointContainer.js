import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import Error404 from "../error404";

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
}));

export default function ControlledAccordion({ endpoints, project }) {
  const classes = useStyles();

  if (!endpoints) return <Error404 />;

  return (
    <div className={classes.root}>
      {endpoints.map((item, index) => {
        if (item && item.name) {
          return <Card {...item} key={`endpoint-${item.name}-${index + 1}`} />;
        } else return null;
      })}
    </div>
  );
}
