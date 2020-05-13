import React, { Component } from "react";

export class EmailSidebar extends Component {
  render() {
    return (
      <div class="sidebar-container right-sidebar-container">
        <ul class="sidebar-list">
          <li class="sidebar-item">
            <a href="mailto:ynbella@vt.edu" class="sidebar-link">
              ynbella@vt.edu
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default EmailSidebar;
