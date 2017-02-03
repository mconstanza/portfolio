import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className = "row" id="header">
          <img id="header-image" className="img-responsive" src="./img/codeheader2.jpg"/>
          <div className="header-content-inner">
            <h1 id="homeHeading">M Constanza</h1>
            <hr className="hUnderline"/>
            <p>Hi. I'm Mike. Welcome to my portfolio.</p>
        </div>
      </div>
    );
  }
}

export default Header;
