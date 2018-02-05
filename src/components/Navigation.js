import React, { Component } from 'react';
import Social from './Social';

class Navigation extends Component {
  render() {
    return (
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
        <span className="navbar-brand"><img alt="Glasses logo" id="navLogo" src="./img/glasses-128.png"/></span>
        <span className="nav-item">MConstanza</span>
        <div className="navbar-nav ml-auto">
          <a className="nav-item nav-link" href="#about">About</a>
          <a className="nav-item nav-link" href="#skills">Skills</a>
          <a className="nav-item nav-link" href="#portfolio">Portfolio</a>
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="contact" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Contact
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="contact">
              <a className="dropdown-item" href="mailto:michael.constanza@gmail.com">
                <img className="icon hvr-float" src="img/message-closed-envelope.png" alt="email me @ michael.constanza@gmail.com"/>
                Email
              </a>
              <a className="dropdown-item" target="blank" href="https://github.com/mconstanza">
                <img className="icon hvr-float" src="img/github_64.png" alt="github"/>
                Github
              </a>
              <a className="dropdown-item" target="blank" target="blank" href="https://www.linkedin.com/in/michael-constanza-0b2b1152">
                <img className="icon hvr-float" src="img/linkedin_circle_color.png" alt="linkedin"/>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
