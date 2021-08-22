import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import SimpleSelect from "./SimpleSelect";
import VersionContainer from "./VersionContainer";

export default function NewAPI({ versions }) {
  const [apiName, setApiName] = useState("Sample API Name");
  const [endpoint, setEndpoint] = useState("Sample Endpoint");
  const [apiType, setApiType] = useState("GET");

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
        onChange={(e) => setApiName(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="endpoint"
        label="Endpoint (URL)"
        name="endpoint"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
      />
      <SimpleSelect
        title="API Type"
        options={["GET", "POST", "UPDATE", "DELETE"]}
        defaultValue="GET"
        value={apiType}
        setValue={setApiType}
      />
      <VersionContainer versions={versions} apiType={apiType} />
    </>
  );
}
