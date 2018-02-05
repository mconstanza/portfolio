import React, { Component } from 'react';

import Skill from './Skill';

class Skills extends Component {
  render() {
    return (

      <section id="skills" className="row">
        <div id="skillsHeader">
          <h2 className="headingWhite">Skills</h2>
          <hr className="hUnderlineWhite"/>
        </div>
            <div id="skillListContainer">
              <ul id="skillsList">
                <Skill skill="HTML" icon="./img/skills/html.png" link="https://www.w3.org/TR/html5/"/>
                <Skill skill="CSS3" icon="./img/skills/css3.png" link="https://developer.mozilla.org/en-US/docs/Web/CSS"/>
                <Skill skill="Javascript" icon="./img/skills/javascript.png" link="http://www.w3schools.com/jsref"/>
                <Skill skill="J-Query" icon="./img/skills/Logo-JQuery-128.png" link="http://api.jquery.com/"/>
                <Skill skill="Ruby" icon="./img/skills/ruby.png" link="http://ruby-doc.org/"/>
                <Skill skill="Python" icon="./img/skills/python2.png" link="https://docs.python.org/3/"/>
                <Skill skill="Git" icon="./img/skills/git-branch.png" link="https://git-scm.com/documentation"/>
                <Skill skill="Node.js" icon="./img/skills/node.png" link="https://nodejs.org/api/"/>
                <Skill skill="Express.js" icon="./img/skills/node.png" link="https://expressjs.com/en/api.html"/>
                <Skill skill="MySQL" icon="./img/skills/mysql.png" link="https://dev.mysql.com/doc/"/>
                <Skill skill="MongoDB" icon="./img/skills/mongoLeaf.png" link="https://docs.mongodb.com/manual/"/>
                <Skill skill="MVC Architecture" icon="./img/skills/curly_braces.png" link="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"/>
                <Skill skill="RESTful Services" icon="./img/skills/curly_braces.png" link="https://en.wikipedia.org/wiki/Representational_state_transfer"/>
                <Skill skill="React.js" icon="./img/skills/react.png" link="https://facebook.github.io/react/"/>
                <Skill skill="Vue.js" icon="./img/skills/vue.png" link="https://vuejs.org/"/>
            </ul>
          </div>
      </section>

    );
  }
}

export default Skills;
