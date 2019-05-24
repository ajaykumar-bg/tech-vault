import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from "react-router-dom";

import { loginUser, logoutUser } from '../actions/AuthAction'

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "274869646267-s65d4g324l4h9ltv8l0p3p1vvgfukl5o.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
            
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.loginUser(this.auth.currentUser.get());
        } else {
            this.props.logoutUser();
        }
    }

    onSignInClick =() => {
        this.auth.signIn();
    }

    onSignOutClick =() => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.props.isAuthenticated) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon"></i>Sign Out
                </button>
            )
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon"></i>Sign in
                </button>
            )
        }
    }
    
    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated
    }
  }
  
  const mapDispatchToProps = { loginUser, logoutUser }

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth)
