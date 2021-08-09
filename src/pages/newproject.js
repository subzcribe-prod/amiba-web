import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import NewProject from "../components/NewProject";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ResponsiveDrawer title="Create a new project">
        <NewProject />
      </ResponsiveDrawer>
    </div>
  );
}
