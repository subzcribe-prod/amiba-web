import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
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
  statusCode,
  request,
  response,
  name,
  handleChange,
  panel,
  expanded,
}) {
  const classes = useStyles();
  return (
    <>
      <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${name}bh-content`}
          id={`${name}bh-header`}
        >
          <Typography className={classes.heading}>{name}</Typography>
          <Typography className={classes.secondaryHeading}>
            {statusCode}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            {request && (
              <>
                <Grid item xs={3}>
                  <Typography>Request</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography>{request}</Typography>
                </Grid>
              </>
            )}

            <Grid item xs={3}>
              <Typography>Response</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography>{response}</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
