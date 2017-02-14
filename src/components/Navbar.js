import React, { Component } from 'react';
import Social from './Social';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <Navbar id="navbar" className="row">
        <Navbar.Header>
          <Navbar.Brand>
            <a id="navbarBrand" className="navbar-brand" href="#"><img alt="Glasses logo" id="navLogo" src="./img/glasses-128.png"/> M Constanza</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#portfolio">Portfolio</NavItem>

            <NavDropdown eventKey={1} title="Contact" id="basic-nav-dropdown">
              <MenuItem target="blank" href="mailto:michael.constanza@gmail.com"eventKey={1.1}>
                <img className="icon hvr-float" src="img/message-closed-envelope.png" alt="email me @ michael.constanza@gmail.com"/>
                Email
              </MenuItem>

              <MenuItem target="blank" href="https://github.com/mconstanza" eventKey={1.2}>

                  <img className="icon hvr-float" src="img/github_64.png" alt="github"/>
                  Github

              </MenuItem>

              <MenuItem target="blank" href="https://www.linkedin.com/in/michael-constanza-0b2b1152" eventKey={1.3}>

                  <img className="icon hvr-float" src="img/linkedin_circle_color.png" alt="linkedin"/>
                  LinkedIn

              </MenuItem>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    );
  }
}

export default Navigation;
