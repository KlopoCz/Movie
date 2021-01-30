import React from "react";
import "./NavBar.css";

const NavBar = ({ showSearchBar }) => {
  return (
    <div className="NavBarContainer">
      <a href="/">Home</a>
      <a href="/movies">Movies</a>
      <a href="/about">About</a>
      {showSearchBar ? (
        <a className="SeachBar" href="/movies">
          <input placeholder="search..."></input>
          <span></span>
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
