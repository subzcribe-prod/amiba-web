import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { projectReducer } from "./project";
import { apiReducer } from "./api";
import { versionReducer } from "./version";
import { currentReducer } from "./current";

const rootReducer = combineReducers({
  user: authReducer,
  projects: projectReducer,
  current: currentReducer,
  versions: versionReducer,
  apis: apiReducer,
});

export default rootReducer;
