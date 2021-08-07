import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
// import { Fab } from "@material-ui/core";
// import AddIcon from "@material-ui/icons/Add";
// import { useHistory } from "react-router-dom";
import ResponsiveDrawer from "../components/Home/ResponsiveDrawer";
import Container from "../components/Home/Container";

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
  // let history = useHistory();

  // const handleNext = () => {
  //   history.push("/signin");
  // };

  return (
    <div className={classes.root}>
      <ResponsiveDrawer>
        <Container />
      </ResponsiveDrawer>
    </div>
  );
}
