import React, { Component } from 'react';

class Social extends Component {
  render() {
    return (

      <ul className="socialLinks">
        <li className="socialLink">
            <a target="_blank" href="mailto:michael.constanza@gmail.com">
                <img className="icon hvr-float" src="img/message-closed-envelope.png" alt="email me @ michael.constanza@gmail.com"/>
            </a>
        </li>
        <li className = "socialLink">
            <a target="_blank" href="https://github.com/mconstanza">
                <img className="icon hvr-float" src="img/github_64.png" alt="github"/>
            </a>
        </li>

        <li className="socialLink">
            <a target="_blank" href="https://www.linkedin.com/in/michael-constanza-0b2b1152">
                <img className="icon hvr-float" src="img/linkedin_circle_color.png" alt="linkedin"/>
            </a>
        </li>

        <li className="socialLink">
            <a target="_blank" href="http://stackoverflow.com/users/6605649/michael-constanza">
                <img className="icon hvr-float" src="img/Stack_Overflow_64.png" alt="stack overflow"/>
            </a>
        </li>
      </ul>

    );
  }
}

export default Social;
