import React from "react";

import Layout from "./components/Layout";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection.jsx";
import BackgroundSection from "./sections/BackgroundSection";
import ProjectSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

import "./styles/reset.scss";
import "./styles/color.scss";
import "./styles/layout.scss";
import "./styles/type.scss";

function App() {
  return (
    <Layout>
      <HeroSection title="Hero" id="hero" />
      <AboutSection title="About" id="about" />
      <BackgroundSection title="Background" id="background" />
      <ProjectSection title="Projects" id="projects" />
      <ContactSection title="Contact" id="contact" />
    </Layout>
  );
}

export default App;
