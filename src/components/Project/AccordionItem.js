import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function AccordionItem({
  title,
  description,
  handleChange,
  name,
  isExpanded,
}) {
  const classes = useStyles();
  return (
    <>
      <Accordion expanded={isExpanded === name} onChange={handleChange(name)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${name}bh-content`}
          id={`${name}bh-header`}
        >
          <Typography variant="h5" className={classes.heading}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{description}</AccordionDetails>
      </Accordion>
    </>
  );
}
