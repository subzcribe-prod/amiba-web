import axios from "axios";
require("dotenv").config();

export const getProjects = (userId, token) => {
  const headers = { auth: token };
  return axios.get(`${process.env.REACT_APP_API}/user/${userId}`, { headers });
};
