import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Home from "../components/Home";
import { isUserAuthenticated } from "../components/Home/utils";
import { getProjects } from "../redux/actions/projects";

export default function HomePage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(async () => {
    const res = await getProjects(user.userId, user.token);
    if (res.data.data.projects && res.data.data.projects.length > 0)
      dispatch({ type: "LOAD_PROJECTS", payload: res.data.data.projects });
  }, [user]);

  return <Home />;
}
