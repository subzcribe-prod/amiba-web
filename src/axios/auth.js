import axios from "axios";
require("dotenv").config();

export const signup = (user) => {
  return axios.post(`${process.env.REACT_APP_API}/user/add`, user);
};

export const signin = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/user/verify`, user);
