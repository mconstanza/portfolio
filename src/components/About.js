import React, { Component } from 'react';

class About extends Component {
  render() {
    return (

      <section className="row" id="about">
          <h2 className="headingRed" id="aboutHeader">About</h2>
          <hr className="hUnderline"/>
          <div id="aboutContentDiv">
            <div id="profileImageDiv">
              <img id="profileImage" src="./img/profileImage.jpg"/>
            </div>
            <div id="aboutTextDiv">
              <p className="aboutText">I'm a teacher, coder, and overall problem-solver.
                I love finding solutions to problems that I come across and helping to empower
                others to do the same for themselves. I've been honing my skills and now
                I want to help you build cool things. Check out what I've been making while learning.
              </p>
            </div>
          </div>
      </section>

    );
  }
}

export default About;
