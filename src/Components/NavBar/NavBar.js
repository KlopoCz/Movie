import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBarContainer">
      <a href="/">Home</a>
      <a href="/movies">Movies</a>
      <a href="/about">About</a>
      <div>
        <input placeholder="search..."></input>
        <span></span>
      </div>
    </div>
  );
};

export default NavBar;
