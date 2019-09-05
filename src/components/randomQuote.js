import React, { Component } from "react";

class RandomQuote extends Component {
  state = {};
  render() {
    return (
      <div id="quotebox">
        <h1 id="text"></h1>
        <h2 id="author"></h2>
        <button id="new-quote"></button>
      </div>
    );
  }
}

export default RandomQuote;
