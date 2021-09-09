import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccordionItem from "./AccordionItem";
import Error404 from "../error404";
import AddAPI from "./AddAPI";
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

export default function ControlledAccordion({ apis, project }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  console.log("apis", apis);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!apis) return <Error404 />;

  return (
    <div className={classes.root}>
      {apis.map((item) => {
        if (item && item.name) {
          return (
            <AccordionItem
              {...item}
              name={item.name}
              expanded={expanded}
              handleChange={handleChange}
            />
          );
        } else return null;
      })}
      <AddAPI project={project} />
    </div>
  );
}
