import axios from "axios";
import header from "./header";
require("dotenv").config();

export const getEndpoints = (token, projectid) => {
  return axios.get(
    `${process.env.REACT_APP_API}/project/${projectid}`,
    header(token)
  );
};

export const getEndpointDetails = (endpointid, token) => {
  return axios.get(
    `${process.env.REACT_APP_API}/endpoint/${endpointid}`,
    header(token)
  );
};

export const addEndpoint = (data, token) => {
  return axios.post(
    `${process.env.REACT_APP_API}/endpoint/add`,
    data,
    header(token)
  );
};

export const addVersion = (data, token) => {
  return axios.post(
    `${process.env.REACT_APP_API}/endpoint/add/version`,
    data,
    header(token)
  );
};
