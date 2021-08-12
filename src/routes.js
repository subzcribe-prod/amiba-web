import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Home from "./pages/home";
import NewProject from "./pages/newproject";
import ResponsiveDrawer from "./components/ResponsiveDrawer";

function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <ResponsiveDrawer>
            <Route exact path="/newproject">
              <NewProject />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </ResponsiveDrawer>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
