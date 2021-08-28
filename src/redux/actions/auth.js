import axios from "axios";
require("dotenv").config();

export const signup = async (user) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API}/user/add`, user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/user/verify`, user);
