import { getProjects } from "../actions/projects";

export const loadProjects = async (user, dispatch) => {
  const res = await getProjects(user.userId, user.token);
  if (res.data.data.projects && res.data.data.projects.length > 0)
    dispatch({ type: "LOAD_PROJECTS", payload: res.data.data.projects });
};
