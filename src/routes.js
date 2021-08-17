import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResponsiveDrawer from "./components/ResponsiveDrawer";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Home from "./pages/home";
import NewProject from "./pages/newproject";
import Project from "./pages/project";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <ResponsiveDrawer>
          <Route exact path="/newproject" component={NewProject} />
          <Route exact path="/projects/:projectname" component={Project} />
          <Route exact path="/" component={Home} />
        </ResponsiveDrawer>
      </Switch>
    </Router>
  );
}

export default Routes;
