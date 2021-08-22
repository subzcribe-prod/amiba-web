import React from "react";
import NewAPI from "../components/NewAPI";
import { useSelector } from "react-redux";

export default function NewAPIPage() {
  const versions = useSelector((state) => state.versions);
  return (
    <>
      <NewAPI versions={versions} />
    </>
  );
}
