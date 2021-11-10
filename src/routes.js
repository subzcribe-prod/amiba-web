import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ResponsiveDrawer from "./components/ResponsiveDrawer";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Home from "./pages/home";
import NewProject from "./pages/newproject";
import Project from "./pages/project";
import Endpoint from "./pages/endpoint";
import NewEndpoint from "./pages/newendpoint";
import Demo from "./pages/demo";

import ProtectedRoute from "./components/common/ProtectedRoute";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <ResponsiveDrawer>
          <ProtectedRoute exact path="/newproject" component={NewProject} />
          <ProtectedRoute
            exact
            path="/projects/:projectslug"
            component={Project}
          />
          <ProtectedRoute
            exact
            path="/projects/:project/:endpoint/add"
            component={NewEndpoint}
          />
          <ProtectedRoute
            exact
            path="/projects/:project/:endpoint/view"
            component={Endpoint}
          />
          <ProtectedRoute
            exact
            path="/projects/:project/:endpoint/edit"
            component={() => <NewEndpoint edit />}
          />
          <ProtectedRoute exact path="/demo" component={Demo} />
          <ProtectedRoute exact path="/" component={Home} />
        </ResponsiveDrawer>
      </Switch>
    </Router>
  );
}

export default Routes;
