import React, { Component } from 'react';
import projects from '../helpers/projects.js';
import Project from './Project';

// Define App
class Carousel extends Component {
  constructor(props){
    super(props);
    this.state={
      projects: projects
    }
  }

  renderProjects() {
    const projects = this.state.projects.map((project) =>
      <Project name={project.name} tag={project.tag} url={project.url} image={project.image} git={project.git}/>
    )
    return projects
  }


  render() {
    return (
      <div id="carousel">
        <button onClick='#' className="carouselBtn" id="carouselBackBtn">Back</button>
        {this.renderProjects()}
        <button onClick='#' className="carouselBtn" id="carouselFwdBtn">FWD</button>

      </div>


    );
  }
}

export default Carousel;
