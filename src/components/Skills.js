import React, { Component } from 'react';

import Skill from './Skill';

class Skills extends Component {
  render() {
    return (

      <section id="skills">
        <div id="skillListDiv">
          <h2 id="skillsHeader">Skills</h2>
            <ul id="skillsList">
              <Skill skill="HTML" icon="./img/skills/html.png"/>
              <Skill skill="CSS3" icon="./img/skills/css3.png"/>
              <Skill skill="Javascript" icon="./img/skills/javascript.png"/>
              <Skill skill="Ruby" icon="./img/skills/ruby.png"/>
              <Skill skill="Python" icon="./img/skills/python2.png"/>
              <Skill skill="Git" icon="./img/skills/git-branch.png"/>
              <Skill skill="Node.js" icon="./img/skills/node.png"/>
              <Skill skill="Express.js" icon="./img/skills/node.png"/>
              <Skill skill="MySQL" icon="./img/skills/mysql.png"/>
              <Skill skill="MongoDB" icon="./img/skills/mongodb.jpg"/>
              <Skill skill="Restful Services" icon="./img/skills/curly_braces.png"/>
              <Skill skill="React.js" icon="./img/skills/react.png"/>
          </ul>
        </div>
      </section>

    );
  }
}

export default Skills;
