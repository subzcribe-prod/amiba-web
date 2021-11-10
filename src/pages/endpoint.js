import React, { useEffect, useState } from "react";
import {
  CssBaseline,
  Typography,
  Container,
  Button,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getEndpointDetails } from "../axios/endpoints";
import VersionContainer from "../components/Endpoint/VersionContainer";
import AddVersion from "../components/NewEndpoint/AddVersion";
import { getAuthenticatedUser } from "../helper functions/auth";
require("dotenv").config();

const useStyles = makeStyles((theme) => ({
  container: {},
  paper: {
    display: "flex",
    flexDirection: "column",
  },
  endpointname: {
    textTransform: "capitalize",
  },
  link: {
    textTransform: "lowercase",
    textDecoration: "underline",
  },
}));

export default function Endpoint() {
  const [endpoint, setEndpoint] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [showAddVersion, setShowAddVersion] = useState(false);

  useEffect(() => {
    async function load() {
      const user = getAuthenticatedUser();
      try {
        const res = await getEndpointDetails(user.endpointId, user.token);
        let endpointFromDb = res.data.data;
        endpointFromDb.url = res.data.url;
        setEndpoint(endpointFromDb);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
        setLoading(false);
        setError(true);
      }
    }
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
            slug : {`${endpoint.slug}`}
          </Typography>
          <Typography variant="h6" className={classes.endpointname}>
            url :{" "}
            <span className={classes.link}>
              {`${process.env.REACT_APP_GENERATED_API}/${endpoint.url}`}
            </span>
          </Typography>
          <Typography variant="h6">{endpoint.description}</Typography>
          <Typography variant="h6">Version details</Typography>
          <VersionContainer
            activeVersion={endpoint.activeVersion}
            versions={endpoint.versions}
          />
          {showAddVersion && <AddVersion requestType={endpoint.requestType} />}
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShowAddVersion(!showAddVersion)}
            >
              {showAddVersion ? "Cancel" : "Add Version"}
            </Button>
          </Box>
        </div>
      </Container>
    );

  return null;
}
