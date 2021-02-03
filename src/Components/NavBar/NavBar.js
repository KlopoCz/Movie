import React from "react";
import "./NavBar.css";

const NavBar = ({ showSearchBar }) => {
  return (
    <div className="NavBarContainer">
      <div>
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/about">About</a>
      </div>
      {showSearchBar ? (
        <div className="NavBarButtonsContainer">
          <a className="SeachBar" href="/movies">
            <span></span>
          </a>
          <a className="ViewAddButton" href="/saved">
            <span></span>
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
