import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getApiResponse } from "../axios/demo";
import CustomTable from "../components/demo/CustomTable";
import { Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: "red",
  },
  json: {
    backgroundColor: "#DCDCDC",
    padding: "0.5em",
  },
}));

export default function Demo({ history }) {
  const classes = useStyles();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function load() {
    try {
      const res = await getApiResponse();
      if (!Array.isArray(res?.data))
        return setError("Bad Request. The response JSON should be an array.");
      if (res.data.length <= 0) return setError("No data available..");
      setResponse(res.data);
    } catch (error) {
      console.log("err", error.response);
      setError("Something went wrong..");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (loading) return <h1>Loading..</h1>;

  if (error) {
    return (
      <>
        <Paper className={classes.paper}>
          <Typography variant="h4">{error}</Typography>
        </Paper>
      </>
    );
  }

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Demo
      </Typography>
      <div className={classes.root}>
        {response && <CustomTable rows={response} />}
      </div>
    </>
  );
}
