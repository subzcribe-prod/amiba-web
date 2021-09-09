import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccordionItem from "./AccordionItem";
import Error404 from "../error404";
import { useDispatch, useSelector } from "react-redux";
import { getAllVersions } from "../../redux/actions/versions";
import { useHistory } from "react-router-dom";
import { selectedProject } from "../../helper functions/utils";

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

  const dispatch = useDispatch();
  const history = useHistory();

  const projects = useSelector((state) => state.projects);
  const user = useSelector((state) => state.user);

  const project = selectedProject(history, projects);

  useEffect(() => {
    (async () => {
      if (project && project.endpoints.length > 0) {
        const versions = await getAllVersions(project.endpoints, user.token);
        dispatch({ type: "LOAD_VERSIONS", payload: versions });
        console.log(versions);
        // dispatch({ type: "LOAD_VERSIONS", payload: { versions } });
      }
    })();
  }, [projects]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!versions) return <Error404 />;

  return (
    <div className={classes.root}>
      {versions.map((item, index) => {
        if (item && item.name) {
          return (
            <AccordionItem
              {...item}
              expanded={expanded}
              handleChange={handleChange}
              panel={item.name.toLowerCase()}
              key={`version-${item.name}-${index + 1}`}
            />
          );
        } else return null;
      })}
    </div>
  );
}
