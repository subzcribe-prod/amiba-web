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

export const updateActiveVersion = (data, token) => {
  return axios.put(
    `${process.env.REACT_APP_API}/endpoint/update`,
    data,
    header(token)
  );
};

export const deleteEndpoint = (endpointId, data, token) =>
  axios.delete(`${process.env.REACT_APP_API}/endpoint/remove/${endpointId}`, {
    headers: { auth: token },
    data,
  });

export const updateEndpointDetails = (data, token) =>
  axios.put(
    `${process.env.REACT_APP_API}/endpoint/update`,
    data,
    header(token)
  );
