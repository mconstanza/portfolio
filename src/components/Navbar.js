import React, { Component } from 'react';
import Social from './Social';

class Navbar extends Component {
  render() {
    return (
      <div className="row">
        <div id="navbar" className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img id="navLogo" src="./img/glasses-128.png"/> M Constanza</a>
            <div className = "navbarSocial">
              <Social/>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
