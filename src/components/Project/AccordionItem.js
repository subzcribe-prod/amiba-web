import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

export default function AccordionItem(props) {
  const classes = useStyles();
  const { description, handleChange, name, expanded, slug, requestType } =
    props;
  return (
    <>
      <Accordion expanded={expanded === name} onChange={handleChange(name)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${name}bh-content`}
          id={`${name}bh-header`}
        >
          <Typography variant="h5" className={classes.heading}>
            {name}
          </Typography>
          <Link to={`${window.location.pathname}${slug}`}>
            <Button>Link</Button>
          </Link>
        </AccordionSummary>
        <AccordionDetails>
          {slug && <Typography>Slug: {slug}</Typography>}
          {requestType && <Typography>Request type : {requestType}</Typography>}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
