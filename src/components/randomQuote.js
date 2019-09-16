import React, { Component } from "react";
import quotes from "./quotes.json";

//let newQ = JSON.stringify(quotes);

class RandomQuote extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);
    let x = Math.floor(Math.random() * quotes.quotes.length);
    this.state = {
      quote: quotes.quotes[x].quote,
      author: quotes.quotes[x].author
    };
  }

  getQuote() {
    let x = Math.floor(Math.random() * quotes.quotes.length);
    this.setState({ quote: (this.setState.quote = quotes.quotes[x].quote) });
    this.setState({ author: (this.setState.quote = quotes.quotes[x].author) });

    //console.log(quotes.quotes[1]);
  }

  render() {
    return (
      <div id="quotebox" className="container">
        <h1 id="text">{this.state.quote}</h1>
        <h2 id="author">- {this.state.author}</h2>
        <button id="new-quote" className="button" onClick={this.getQuote}>
          Click me to get some very profound quotes!
        </button>
      </div>
    );
  }
}

export default RandomQuote;
