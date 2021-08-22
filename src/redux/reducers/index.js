import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { projectReducer } from "./project";
import { apiReducer } from "./api";
import { versionReducer } from "./version";

const rootReducer = combineReducers({
  user: authReducer,
  projects: projectReducer,
  versions: versionReducer,
  apis: apiReducer,
});

export default rootReducer;
