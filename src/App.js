import React from "react";

// Import Components
import Layout from "./components/Layout";

// Import Sections
import AboutSection from "./sections/AboutSection";
import BackgroundSection from "./sections/BackgroundSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

// Import Styles
import "./styles/main.scss";

function App() {
  return (
    <Layout>
      <AboutSection />
      <BackgroundSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
