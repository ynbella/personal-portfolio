import React, { Component } from "react";

import Header from "./Header";
import SocialSidebar from "./SocialSidebar";
import EmailSidebar from "./EmailSidebar";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <SocialSidebar />
        <EmailSidebar />
        <main className="content-container">{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
