import React, { Component } from 'react';
import Social from './Social';

class Footer extends Component {
  render() {
    return (
      <section id="contact" className="row">
        <div id="footer" className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="footerNameDiv">
              Made by Michael Constanza - Goonies never say die
              <Social/>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
