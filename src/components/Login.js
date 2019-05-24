import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import logo from "../logo.svg";
import "../App.css";
import { loginUser } from '../actions/AuthAction'

class Login extends Component {
  responseGoogle = response => {
    if (response && response.w3 && response.w3.U3) {
      const user = {
        name: response.w3.ig,
        provider: "google",
        email: response.w3.U3,
        provider_id: response.El,
        token: response.Zi.access_token,
        provider_pic: response.w3.Paa
      };
      this.props.loginUser(user);
      this.props.history.push('/home');
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {/* <button className="ui red google button">
              <i className="google icon"></i>Login</button> */}
            <GoogleLogin
              clientId="274869646267-s65d4g324l4h9ltv8l0p3p1vvgfukl5o.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <Link className="App-link" to="/home">
            Tech Vault
          </Link>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.AuthReducer.user
  }
}

const mapDispatchToProps = { loginUser }



export default connect(mapStateToProps, mapDispatchToProps)(Login);
