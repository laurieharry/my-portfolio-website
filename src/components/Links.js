import React, { Component } from "react";
import "./Components.css";

class Links extends Component {
  state = {};
  render() {
    return (
      <div>
        <a href="https://www.linkedin.com/in/laurence-harrison-21588a165/">
          <img
            src={require("./Images/LinkedIn-Logos/LI-In-Bug.png")}
            className="links"
            alt="LinkedIn"
            title="LinkedIn"
          ></img>
        </a>
        <a href="https://www.github.com/laurieharry">
          <img
            src={require("./Images/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png")}
            className="links"
            alt="GitHub"
            title="GitHub"
          ></img>
        </a>
      </div>
    );
  }
}

export default Links;
