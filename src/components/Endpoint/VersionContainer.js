import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ViewVersion from "./ViewVersion";
import Error404 from "../error404";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function VersionContainer({ versions, activeVersion }) {
  const classes = useStyles();
  const [checkedList, setCheckedList] = useState(
    versions.reduce((prev, curr) => {
      return { ...prev, [curr._id]: curr._id === activeVersion };
    }, {})
  );
  console.log("version container", checkedList);

  if (!versions) return <Error404 />;

  return (
    <div className={classes.root}>
      {versions.map((item, index) => {
        if (item) {
          return (
            <ViewVersion
              isActive={checkedList[item._id]}
              setCheckedList={setCheckedList}
              {...item}
              key={`version-${item.name}-${index + 1}`}
            />
          );
        } else return null;
      })}
    </div>
  );
}
