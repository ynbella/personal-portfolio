import React, { Component } from "react";

import { ReactComponent as GithubIcon } from "../images/github.svg";
import { ReactComponent as LinkedInIcon } from "../images/linkedin.svg";
import { ReactComponent as CodepenIcon } from "../images/codepen.svg";
import { ReactComponent as TwitterIcon } from "../images/twitter.svg";

class SocialSidebar extends Component {
  render() {
    return (
      <div class="sidebar-container left-sidebar-container">
        <ul class="sidebar-list">
          <li class="sidebar-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/younessbella/"
              class="sidebar-link"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li class="sidebar-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/ynbella/"
              class="sidebar-link"
            >
              <GithubIcon />
            </a>
          </li>
          <li class="sidebar-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.codepen.io/ynbella"
              class="sidebar-link"
            >
              <CodepenIcon />
            </a>
          </li>
          <li class="sidebar-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.twitter.com/younessnb"
              class="sidebar-link"
            >
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialSidebar;
