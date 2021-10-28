export const selectedProject = (history, projects) => {
  const projectslug = history.location.pathname.split("/")[2];
  const project = projects.find(
    ({ slug }) => slug && slug.toLowerCase() === projectslug.toLowerCase()
  );
  return project ? project[0] : null;
};

export const findProject = (projects, projectslug) => {
  return projects
    ? projects.find(
        ({ slug }) => slug && slug.toLowerCase() === projectslug.toLowerCase()
      )
    : null;
};
