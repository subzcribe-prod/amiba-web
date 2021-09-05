import axios from "axios";
require("dotenv").config();

const header = (token) => {
  return { headers: { auth: token } };
};

export const getProjects = (userId, token) => {
  return axios.get(
    `${process.env.REACT_APP_API}/user/${userId}`,
    header(token)
  );
};

export const addProject = (project, userId, token) => {
  return axios.post(
    `${process.env.REACT_APP_API}/project/add`,
    { ...project, userId },
    header(token)
  );
};
