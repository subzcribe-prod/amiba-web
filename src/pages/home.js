import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "../components/Home/Card";
import CardAdd from "../components/Home/CardAdd";
import { getProjects } from "../axios/projects";

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
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);

  async function load() {
    const user = JSON.parse(localStorage.user);
    try {
      const res = await getProjects(user.userId, user.token);
      const projectsFromDb = res.data.data.projects;
      setProjects(projectsFromDb);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (loading) return <h1>Loading..</h1>;

  if (projects === null) return <h1>Null</h1>;

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
