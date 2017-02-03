import React, { Component } from 'react';

class Project extends Component {

  url() {
    if(this.props.url && this.props.url != '') {
      return <a target="blank" href={this.props.url}><img className="projectDeployIcon" src='./img/monitor.png'/></a>
    }
  }

  git() {
    if(this.props.git && this.props.git != '') {
      return <a target="blank" href={this.props.git}><img className="projectGitIcon" src='./img/github-logo.png'/></a>
    }
  }

  render() {
    return (

        <div className="project">
          <img className="projectImg" src={this.props.image}/>
          <div className="projectOverlay">
            {this.url()}
            {this.git()}
          </div>
        </div>

    );
  }
}

export default Project;
