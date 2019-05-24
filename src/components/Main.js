import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux'

import Login from "./Login";
import Home from "./Home";

class Main extends Component {
  render() {
    const { isAuthenicated } = this.props;
    return (
      <main>
        <Switch>
          <Route exact path="/" render={() => (
            isAuthenicated ? (
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
    isAuthenicated: state.AuthReducer.isAuthenicated
  }
}

export default connect(mapStateToProps, {})(Main);
