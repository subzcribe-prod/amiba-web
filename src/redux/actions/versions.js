import axios from "axios";
import header from "./header";
require("dotenv").config();

export const addVersion = ({
  projectId,
  name,
  slug,
  version,
  token,
  type: requestType,
}) => {
  return axios.post(
    `${process.env.REACT_APP_API}/endpoint/add`,
    { name, projectId, slug, version, requestType },
    header(token)
  );
};

export const getVersions = (endpointId, token) => {
  return axios.get(
    `${process.env.REACT_APP_API}/endpoint/${endpointId}`,
    header(token)
  );
};

export const getAllVersions = async (endpointArray, token) => {
  const response = [];
  endpointArray.forEach(async (e) => {
    const res = await getVersions(e, token);
    response.push(res.data.data);
  });
  return response;
};
