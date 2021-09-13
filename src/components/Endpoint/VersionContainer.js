import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ViewVersion from "./ViewVersion";
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

export default function VersionContainer({ versions }) {
  const classes = useStyles();

  if (!versions) return <Error404 />;

  return (
    <div className={classes.root}>
      {versions.map((item, index) => {
        if (item) {
          return (
            <ViewVersion {...item} key={`version-${item.name}-${index + 1}`} />
          );
        } else return null;
      })}
    </div>
  );
}
