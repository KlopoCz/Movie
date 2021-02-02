import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <div>
        <p>
          This page was made as a small side project while learning to code whit{" "}
          <a href="https://www.themoviedb.org/documentation/api">TMDb API </a>
        </p>
        <p>
          Code available on my{" "}
          <a href="https://github.com/KlopoCz/Movie">Git Hub </a>
        </p>
      </div>
    </div>
  );
};

export default About;
