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
  json: {
    backgroundColor: "#DCDCDC",
    padding: "0.5em",
  },
}));

export default function Demo({ history }) {
  const classes = useStyles();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function load() {
    try {
      const res = await getApiResponse();
      setResponse(JSON.parse(res.data));
    } catch (error) {
      console.log("err", error.response);
      setError(error.response);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (loading) return <h1>Loading..</h1>;

  if (error && Object.keys(error).length > 0) {
    let errorResponse, errorResponseKeys;
    try {
      errorResponse = error.data ? JSON.parse(error.data) : null;
      errorResponseKeys = errorResponse ? Object.keys(errorResponse) : null;
    } catch (err) {
      errorResponse = "Please enter a valid JSON.";
    }

    return (
      <>
        <Typography variant="h4">
          An error occured. Status code{" "}
          <span style={{ fontWeight: "bold" }}>{error.status}</span>
        </Typography>
        <Typography variant="h4">
          Response from server:
          {errorResponseKeys ? (
            <div className={classes.json}>
              &#123;
              {errorResponseKeys &&
                errorResponseKeys.map((key, index) => (
                  <div>
                    {key}:{errorResponse[key]}
                  </div>
                ))}
              &#125;
            </div>
          ) : (
            <div>{errorResponse}</div>
          )}
        </Typography>
      </>
    );
  }

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
