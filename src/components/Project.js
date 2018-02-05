import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';

class Project extends Component {

  url() {
    if(this.props.url && this.props.url !=='') {
      return <a target="blank" href={this.props.url}><img className="projectDeployIcon" src='./img/monitor.png'/></a>
    }
  }

  git() {
    if(this.props.git && this.props.git !=='') {
      return <a target="blank" href={this.props.git}><img className="projectGitIcon" src='./img/github-logo.png'/></a>
    }
  }

  render() {
    return (

        <Panel header={this.props.name} bsStyle={null} className="project">
          <div className="projectContent">
            <img className="projectImg" src={this.props.image}/>
            <div className="projectOverlay">
              <div className="projectName">
                <h2>{this.props.name}</h2>
                <h3>{this.props.tag}</h3>
              </div>
              <div className="projectIconContainer">
                {this.url()}
                {this.git()}
              </div>
            </div>
          </div>
        </Panel>

    );
  }
}

export default Project;
