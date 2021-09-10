import { TextField, Button, Box, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addEndpoint } from "../axios/endpoints";
import SimpleSelect from "../components/NewEndpoint/SimpleSelect";
import AddVersion from "../components/NewEndpoint/AddVersion";

export default function NewAPI({ versions }) {
  const [apiName, setApiName] = useState("");
  const [slug, setSlug] = useState("");
  const [apiType, setApiType] = useState("GET");

  const handleName = (e) => {
    setApiName(e.target.value);
    setSlug(e.target.value.toLowerCase().split(" ").join("-"));
  };

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
        options={["GET", "POST", "UPDATE", "DELETE"]}
        defaultValue="GET"
        value={apiType}
        setValue={setApiType}
      />
      <AddVersion
        requestType={apiType}
        endpointDetails={{
          name: apiName,
          slug: slug,
          requestType: apiType,
        }}
      />
    </>
  );
}
