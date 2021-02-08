import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="FooterContiner">
      <a
        href="https://www.themoviedb.org/"
        className="LogoFooter"
        target="_blank"
        rel="noreferrer"
      >
        <h1>site made with</h1>
        <span></span>
      </a>
      <a
        href="https://github.com/KlopoCz/Movie"
        className="GitHubFooter"
        target="_blank"
        rel="noreferrer"
      >
        <span></span>
        <h1>GitHub</h1>
      </a>
    </div>
  );
};

export default Footer;
