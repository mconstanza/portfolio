import React, { Component } from 'react';
import Project from './Project';
import projects from '../helpers/projects.js';
import {Carousel} from 'react-bootstrap';


class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state={
      projects: projects
    }
  }

  renderProjects() {
    const projects = this.state.projects.map((project) =>
    <Carousel.Item>
      <Project name={project.name} tag={project.tag} url={project.url} image={project.image} git={project.git}/>
    </Carousel.Item>
    )
    return projects
  }

  render() {
    return (

      <section className="row" id="portfolio">
        <h2 className="headingRed" id="portfolioHeader">Portfolio</h2>
        <hr className="hUnderline"/>
        <div id="portfolioDiv">
          <Carousel>
            {this.renderProjects()}
          </Carousel>
        </div>
      </section>

    );
  }
}

export default Portfolio;
