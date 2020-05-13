import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="inner-header-container">
          <div className="logo-container">
            <a href="/" className="logo">
              YB
            </a>
          </div>
          <nav className="nav-container">
            <a href="#about" className="nav-item">
              About
            </a>
            <a href="#/background" className="nav-item">
              Background
            </a>
            <a href="#/projects" className="nav-item">
              Projects
            </a>
            <a href="#contact" className="nav-item">
              Contact
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
