import axios from "axios";
require("dotenv").config();

export const getApiResponse = () => {
  return axios.get(`${process.env.REACT_APP_DEMO_API}`);
};
