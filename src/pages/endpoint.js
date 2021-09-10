import React, { useEffect, useState } from "react";
import { CssBaseline, Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getEndpointDetails } from "../axios/endpoints";
import VersionContainer from "../components/Endpoint/VersionContainer";
import AddVersion from "../components/Endpoint/AddVersion";

const useStyles = makeStyles((theme) => ({
  container: {},
  paper: {
    display: "flex",
    flexDirection: "column",
  },
  endpointname: {
    textTransform: "capitalize",
    width: 300,
  },
}));

export default function Endpoint() {
  const [endpoint, setEndpoint] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [showAddVersion, setShowAddVersion] = useState(false);

  async function load() {
    const user = JSON.parse(localStorage.user);
    try {
      const res = await getEndpointDetails(user.endpointId, user.token);
      const endpointFromDb = res.data.data;
      setEndpoint(endpointFromDb);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const classes = useStyles();

  if (loading) return <h1>Loading..</h1>;

  if (error) return <h1>Error occured</h1>;

  if (endpoint)
    return (
      <Container component="main" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography variant="h5">ENDPOINT DETAILS</Typography>
          <Typography variant="h6" className={classes.endpointname}>
            endpoint name: {endpoint.name}
          </Typography>
          <Typography variant="h6" className={classes.endpointname}>
            request type: {endpoint.requestType}
          </Typography>
          <Typography variant="h6" className={classes.endpointname}>
            slug : {endpoint.slug}
          </Typography>
          <Typography variant="h6">{endpoint.description}</Typography>
          <Typography variant="h6">Version details</Typography>
          <VersionContainer versions={endpoint.versions} />
          {showAddVersion && <AddVersion />}
          <Button onClick={() => setShowAddVersion(!showAddVersion)}>
            {showAddVersion ? "Hide" : "Add Version"}
          </Button>
        </div>
      </Container>
    );

  return null;
}
