import { TextField, Box, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SimpleSelect from "../components/NewEndpoint/SimpleSelect";
import AddVersion from "../components/NewEndpoint/AddVersion";
import {
  getAuthenticatedToken,
  getAuthenticatedUser,
} from "../helper functions/auth";
import { getEndpointDetails, updateEndpointDetails } from "../axios/endpoints";
import { useHistory } from "react-router-dom";

export default function NewAPI({ edit }) {
  const history = useHistory();

  const [apiName, setApiName] = useState("");
  const [slug, setSlug] = useState("");
  const [apiType, setApiType] = useState("GET");

  const handleName = (e) => {
    setApiName(e.target.value);
    setSlug(e.target.value.toLowerCase().split(" ").join("-"));
  };

  const handleClick = async () => {
    try {
      const data = {
        name: apiName,
        slug: slug,
        requestType: apiType,
        endpointId: getAuthenticatedUser().endpointId,
      };
      const res = await updateEndpointDetails(data, getAuthenticatedToken());
      if (res.status === 200) history.goBack();
    } catch (error) {
      console.error(error?.response);
    }
  };

  useEffect(() => {
    // if edit mode, populate state with details from DB
    if (edit) {
      async function load() {
        const user = getAuthenticatedUser();
        try {
          const res = await getEndpointDetails(user.endpointId, user.token);
          // endpoint details from DB
          let e = res.data.data;
          setApiName(e.name);
          setSlug(e.slug);
          setApiType(e.requestType);
        } catch (error) {
          console.log(error.response);
          // setLoading(false);
          // setError(true);
        }
      }
      load();
    }
  }, []);

  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="apiname"
        label="API Name"
        name="apiname"
        autoFocus
        value={apiName}
        onChange={handleName}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="slug"
        label="Slug (URL)"
        name="slug"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        helperText="It should start with '/'"
      />
      <SimpleSelect
        title="API Type"
        options={["GET", "POST", "PUT", "DELETE"]}
        defaultValue="GET"
        value={apiType}
        setValue={setApiType}
      />
      {edit && (
        <Box>
          <Button variant="contained" color="primary" onClick={handleClick}>
            update details
          </Button>
        </Box>
      )}
      {!edit && (
        <AddVersion
          requestType={apiType}
          endpointDetails={{
            name: apiName,
            slug: slug,
            requestType: apiType,
          }}
        />
      )}
    </>
  );
}
