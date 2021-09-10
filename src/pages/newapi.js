import React, { useState } from "react";
import NewAPI from "../components/NewAPI";

export default function NewAPIPage() {
  const [versions, setVersions] = useState(null);
  return (
    <>
      <NewAPI versions={versions} />
    </>
  );
}
