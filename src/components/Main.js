import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux'

import Login from "./Login";
import Home from "./Home";

class Main extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <main>
        <Switch>
          <Route exact path="/" render={() => (
            isAuthenticated ? (
              <Redirect to="/home"/>
            ) : (
              <Redirect to="/login"/>
            )
          )}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.AuthReducer.isAuthenticated
  }
}

export default connect(mapStateToProps, {})(Main);
