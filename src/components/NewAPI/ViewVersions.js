import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccordionItem from "./AccordionItem";
import Error404 from "../error404";
import { useSelector } from "react-redux";

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

export default function ViewVersions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const versions = useSelector((state) => state.versions);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!versions) return <Error404 />;

  return (
    <div className={classes.root}>
      {versions.map((item) => {
        if (item && item.name) {
          return (
            <AccordionItem
              {...item}
              expanded={expanded}
              handleChange={handleChange}
              panel={item.name.toLowerCase()}
              key={`version-${item.name}`}
            />
          );
        } else return null;
      })}
    </div>
  );
}
