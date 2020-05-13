import React, { Component } from "react";

class Section extends Component {
  render() {
    return (
      <div className="section-container" id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}

export default Section;
