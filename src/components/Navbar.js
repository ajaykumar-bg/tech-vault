import React, { Component } from "react";
import "../App.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo">
            Tech Vault
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#">Welcome Ajay</a>
            </li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li>
              <a href="#">Welcome Ajay</a>
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

export default Navbar;
