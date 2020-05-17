import React, { Component } from "react";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  someFn = () => {
    console.log("RUNNING");
    var listInfo = "DAMN IT BOBBY";
    this.props.callbackFromParent(listInfo);
  };
  render() {
    return (
      <section
        className="section-container"
        id={this.props.id}
        name={this.props.name}
      >
        {this.props.children}
      </section>
    );
  }
}

export default Section;
