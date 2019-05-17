import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

export class Login extends Component {
  responseGoogle = (response) => {
    const user = {
      name: response.w3.ig,
      provider: "google",
      email: response.w3.U3,
      provider_id: response.El,
      token: response.Zi.access_token,
      provider_pic: response.w3.Paa
    }
    console.log("responseGoogle", user);
  }
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="353047849820-cc4r0f57gdm56onir633v31b74ftpc00.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        ></GoogleLogin>
      </div>
    )
  }
}

export default Login
