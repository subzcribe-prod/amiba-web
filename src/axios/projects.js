import axios from "axios";
import header from "./header";
require("dotenv").config();

export const getProjects = (userId, token) => {
  return axios.get(
    `${process.env.REACT_APP_API}/user/${userId}`,
    header(token)
  );
};

export const addProject = (data, token) => {
  return axios.post(
    `${process.env.REACT_APP_API}/project/add`,
    data,
    header(token)
  );
};

export const getProjectDetails = (projectid, token) => {
  return axios.get(
    `${process.env.REACT_APP_API}/project/${projectid}`,
    header(token)
  );
};
