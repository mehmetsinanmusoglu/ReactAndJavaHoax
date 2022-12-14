import React from "react";
import LanguageSelector from '../components/LanguageSelector';
import ApiProgress from '../shared/ApiProgress';
import UserSingupPage from '../pages/UserSingupPage';
import LoginPage from '../pages/LoginPage';
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import TopBar from "../components/TopBar";
// import { Authentication } from '../shared/AuthenticationContext'

class App extends React.Component {
  // static contextType = Authentication;

  render() {
    const isLoggedIn = false;
    return (
      <div>
        <Router>
          <TopBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            {!isLoggedIn && <Route path="/login" component={LoginPage} />}
            <Route path="/singup" component={UserSingupPage} />
            <Route path="/user/:username" component={UserPage} />
            <Redirect to="/" />
          </Switch>
        </Router>
        <LanguageSelector />
      </div>
    );
  }
}

export default App;
