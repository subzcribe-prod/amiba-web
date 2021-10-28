import { TextField, Button, Box, Typography } from "@material-ui/core";
import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectedProject } from "../../helper functions/utils";
import SimpleSelect from "./SimpleSelect";
import VersionContainer from "./VersionContainer";

export default function NewAPI({ versions }) {
  const [apiName, setApiName] = useState("Sample API Name");
  const [slug, setSlug] = useState("Sample Slug");
  const [apiType, setApiType] = useState("GET");
  const [api, setApi] = useState("create");

  const history = useHistory();

  const [projects, setProjects] = useState(null);

  const project = selectedProject(history, projects);
  console.log(project);

  const handleClick = () => {
    setApi("created");
    // if (project) {
    //   dispatch({
    //     type: "ADD_NEW_API",
    //     payload: {
    //       name: apiName,
    //       slug,
    //       type: apiType,
    //       projectId: project._id,
    //     },
    //   });
    // }
  };

  const a = null;
  if (a === null) return null;

  return (
    <>
      {api === "create" && (
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
            id="slug"
            label="Slug (URL)"
            name="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
          <SimpleSelect
            title="API Type"
            options={["GET", "POST", "UPDATE", "DELETE"]}
            defaultValue="GET"
            value={apiType}
            setValue={setApiType}
          />
        </>
      )}
      {api === "created" && (
        <>
          <Typography>API Name: {apiName}</Typography>
          <Typography>Slug(URL): {slug}</Typography>
          <Typography>API Type: {apiType}</Typography>
        </>
      )}
      <Box>
        <Button color="primary" variant="contained" onClick={handleClick}>
          create api
        </Button>
      </Box>
      <VersionContainer
        versions={versions}
        api={{ name: apiName, slug, requestType: apiType }}
      />
    </>
  );
}
