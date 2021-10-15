import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getApiResponse } from "../axios/demo";
import CustomTable from "../components/demo/CustomTable";
import { Typography } from "@material-ui/core";

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

export default function Demo({ history }) {
  const classes = useStyles();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      const res = await getApiResponse();
      setResponse(res.data);
      setLoading(false);
    } catch (error) {
      console.log("err", error.response);
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (loading) return <h1>Loading..</h1>;

  if (response === null) return <h1>No response.</h1>;

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
