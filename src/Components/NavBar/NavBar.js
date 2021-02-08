import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ showSearchBar }) => {
  return (
    <div className="NavBarContainer">
      <div>
        <Link to={`/`}>Home</Link>
        <Link to={`/movies`}>Movies</Link>
        <Link to="/about">About</Link>
      </div>
      {showSearchBar ? (
        <div className="NavBarButtonsContainer">
          <Link className="SeachBar" to="/movies">
            <span></span>
          </Link>
          <Link className="ViewAddButton" to="/saved">
            <span></span>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
