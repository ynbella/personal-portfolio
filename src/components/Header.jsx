import React, { Component } from "react";

class Header extends Component {
  render() {
    const NavItems = React.Children.map(this.props.children, (child) => {
      return <li className="nav-item">{child}</li>;
    });

    const SideDrawer = () => {
      const burger = document.querySelector(".drawer-toggle");
      const nav = document.querySelector(".nav-list");
      const navLinks = document.querySelectorAll(".nav-item");
      nav.classList.toggle("nav-active");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });

      burger.classList.toggle("toggle");
      console.log("Side drawer toggled");
    };

    return (
      <header className="header-container">
        <div className="header-logo">{this.props.siteLogo}</div>
        <nav>
          <ul className="nav-list">{NavItems}</ul>
          <div className="drawer-toggle" onClick={SideDrawer}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
