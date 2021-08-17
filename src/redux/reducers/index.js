import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { projectReducer } from "./project";

const rootReducer = combineReducers({
  user: authReducer,
  projects: projectReducer,
});

export default rootReducer;
