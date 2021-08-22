import React from "react";
import { useSelector } from "react-redux";
import Home from "../components/Home";

export default function HomePage() {
  const projects = useSelector((state) => state.projects);

  if (!projects && projects.length <= 0) return null;

  return (
    <>
      <Home projects={projects} />
    </>
  );
}
