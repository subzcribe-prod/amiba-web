import React from "react";
import AddVersion from "./AddVersion";
// import { makeStyles } from "@material-ui/core/styles";
import ViewVersions from "./ViewVersions";
import { useSelector } from "react-redux";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

export default function VersionContainer({ apiType }) {
  // const classes = useStyles();
  const versions = useSelector((state) => state.versions);
  if (!versions) return <>no versions</>;

  return (
    <>
      <ViewVersions versions={versions} />
      <AddVersion versionNumber={versions.length} apiType={apiType} />
    </>
  );
}
