import React, { Component } from "react";
import { Link } from "react-scroll";
import Header from "./Header";
import Social from "./Social";
import Email from "./Email";
export class Layout extends Component {
  render() {
    const NavLinks = React.Children.map(this.props.children, (section) => (
      <Link
        activeClass="active"
        to={section.props.id}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={this.handleSetActive}
        class="nav-link"
      >
        {section.props.title}
      </Link>
    ));

    return (
      <React.Fragment>
        <Header siteLogo="YB">{NavLinks}</Header>
        <Social />
        <Email />
        <main className="content-container">{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
