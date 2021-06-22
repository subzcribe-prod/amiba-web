import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from './pages/signup';
import SignIn from './pages/signin';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/signin">
            <SignIn/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
