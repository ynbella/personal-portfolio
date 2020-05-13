import React, { Component } from "react";

import { Link } from "react-scroll";

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="inner-header-container">
          <div className="logo-container">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="hero"
              className="logo"
            >
              YB
            </Link>
          </div>
          <nav className="nav-container">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="about"
              className="nav-item"
            >
              About
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="background"
              className="nav-item"
            >
              Background
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="projects"
              className="nav-item"
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contact"
              className="nav-item"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
