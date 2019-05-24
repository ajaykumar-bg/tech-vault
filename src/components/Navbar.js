import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import "../App.css";

import { logoutUser } from '../actions/AuthAction';

class Navbar extends Component {
  onLogoutClick = () => {
    this.props.logoutUser();
    this.props.history.push('/login');
  }
  render() {
    const {user} = this.props;
    const userName = (user && user.name) ? user.name : 'guest'
    return (
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo">
            Tech Vault
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/home">Welcome {userName}</Link>
            </li>
            <li onClick={this.onLogoutClick}>
              <Link to="/home">Logout</Link>
            </li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li>
              <Link to="/home">Welcome Ajay</Link>
            </li>
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.AuthReducer.user
  }
}

const mapDispatchToProps = { logoutUser }

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
