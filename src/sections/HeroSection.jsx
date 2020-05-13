import React, { Component } from "react";

import Section from "../components/Section";

class HeroSection extends Component {
  render() {
    return (
      <Section id="hero">
        <div className="hero-section">
          <h1>Hi, my name is</h1>
          <h2>Youness Bella.</h2>
          <h3>I build things for tomorrow.</h3>
          <p>
            I'm a full-stack engineering student based in Northern Virginia with
            expertise in front-end, back-end, high-end, low-end and anything in
            between.
          </p>
        </div>
      </Section>
    );
  }
}

export default HeroSection;
