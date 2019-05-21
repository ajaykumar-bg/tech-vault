import React, { Component } from "react";
import GoogleLogin from "react-google-login";

import { Link } from "react-router-dom";

import logo from "../logo.svg";
import "../App.css";

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
      console.log("responseGoogle", user);
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <GoogleLogin
              clientId="353047849820-psgdjh1ol09hrulcdndh0mi2qm0hrkla.apps.googleusercontent.com"
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

export default Login;
