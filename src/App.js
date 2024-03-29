import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Links from "./components/Links";

function App() {
  return (
    <div className="outerContainer background">
      <Intro></Intro>
      <div>
        <Links></Links>
      </div>
      <AboutMe></AboutMe>
      <div className="projects">
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </div>
      <p>
        here's a bit of text to go at the bottom of the page for some reason
      </p>
      <Links></Links>
    </div>
  );
}

export default App;
