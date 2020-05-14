import React, { Component } from "react";
import classnames from "classnames";

import { Link } from "react-scroll";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  render() {
    return (
      <header
        className={classnames("header-container", {
          "header-container-hidden": !this.state.visible,
        })}
      >
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
