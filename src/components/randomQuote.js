import React, { Component } from "react";

class RandomQuote extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);
    this.state = {
      quote: "Zzzzzzzz",
      author: "Andrea Yu"
    };
  }

  getQuote() {
    console.log("getQuote worked!");
  }

  render() {
    return (
      <div id="quotebox">
        <h1 id="text">{this.state.quote}</h1>
        <h2 id="author">- {this.state.author}</h2>
        <button id="new-quote" onClick={this.getQuote}>
          Click me to get some very profound quotes!
        </button>
      </div>
    );
  }
}

export default RandomQuote;