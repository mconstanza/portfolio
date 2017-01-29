import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (

        <div className="project">
          <img className="projectImg" src={this.props.image}/>
          <div className="projectOverlay">
            <a href={this.props.url}><img className="projectDeployIcon" src='#'/></a>
            <a href={this.props.git}><img className="projectGitIcon" src='#'/></a>
          </div>
        </div>

    );
  }
}

export default Project;
