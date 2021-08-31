import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Home from "../components/Home";

export default function HomePage() {
  let user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  // console.log("user from redux : ", user);
  if (!user || Object.keys(user).length === 0) {
    user = localStorage.user;
    if (user && JSON.parse(localStorage.user)) {
      user = JSON.parse(user);
      dispatch({ type: "LOGGED_IN_USER", payload: user });
      // console.log("user from local storage : ", user);
    } else {
      // console.log("not authenticated");
      history.push("/signin");
    }
  }
  const projects = useSelector((state) => state.projects);

  if (!projects && projects.length <= 0) return null;

  return (
    <>
      <Home projects={projects} />
    </>
  );
}
