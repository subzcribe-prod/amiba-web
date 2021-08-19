import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SimpleSelect from "../components/NewAPI/SimpleSelect";
import VersionContainer from "../components/NewAPI/VersionContainer";

export default function NewAPI() {
  const [apiName, setApiName] = useState(null);
  const [endpoint, setEndpoint] = useState(null);
  const [apiType, setApiType] = useState(null);

  const versions = useSelector((state) => state.versions);
  console.log(versions);

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
