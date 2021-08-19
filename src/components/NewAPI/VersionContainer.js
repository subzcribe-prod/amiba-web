import { Grid } from "@material-ui/core";
import React from "react";
import ViewVersion from "./ViewVersion";
import AddVersion from "./AddVersion";
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

export default function VersionContainer({ versions, apiType }) {
  const classes = useStyles();
  console.log(versions);
  if (!versions) return <>no versions</>;

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {versions.map((item, index) => {
            if (item && item.name !== null && item.description !== null) {
              return (
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                  <ViewVersion {...item} key={item.name} />
                  versions
                </Grid>
              );
            } else return <div />;
          })}
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <AddVersion versionNumber={versions.length} apiType={apiType} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
