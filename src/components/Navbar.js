import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MConstanza</a>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">About</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
