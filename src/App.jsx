import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { Provider } from 'react-redux';

import './themes/iconInitiation';
import "./App.css";
import { PrivateRoute } from './navigation/PrivateRoute';
import { RestrictedRoute } from './navigation/RestrictedRoute';
import { Dashboard, Signin } from './navigation/pageConfig';
import { store } from './redux/store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <RestrictedRoute path="/signin" component={Signin} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export { App };
