import React, { Component } from 'react';


class Skill extends Component {
  render() {
    return (

        <li className="skill">
            <div className="skillDiv">
              <img className="skill-icon" src={this.props.icon}/>
              <p>{this.props.skill}</p>
            </div>
        </li>

    );
  }
}

export default Skill;
