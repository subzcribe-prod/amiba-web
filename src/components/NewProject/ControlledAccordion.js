import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccordionItem from "./AccordionItem";
import CreateApi from "./CreateApi";
import EditApi from "./EditApi";
import DeleteApi from "./DeleteApi";

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

export default function ControlledAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <AccordionItem
        title="Create User API"
        description={<CreateApi />}
        name="createapi"
        isExpanded={expanded}
        handleChange={handleChange}
      />
      <AccordionItem
        title="Edit User API"
        description={<EditApi />}
        name="editapi"
        isExpanded={expanded}
        handleChange={handleChange}
      />
      <AccordionItem
        title="Delete User API"
        description={<DeleteApi />}
        name="deleteapi"
        isExpanded={expanded}
        handleChange={handleChange}
      />
    </div>
  );
}
