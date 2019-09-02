import React, { Component } from "react";
import "./Components.css";

class Links extends Component {
  state = {};
  render() {
    return (
      <div className="container2">
        <a
          className="links"
          href="https://www.linkedin.com/in/laurence-harrison-21588a165/"
        >
          LinkedIn
        </a>
        <a className="links" href="https://github.com/laurieharry/">
          GitHub
        </a>
      </div>
    );
  }
}

export default Links;
