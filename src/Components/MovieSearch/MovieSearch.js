import React from "react";
import NavBar from "../NavBar/NavBar";
import ChooseGener from "./../ChooseGener/ChooseGener";

const MovieSearch = () => {
  return (
    <div>
      <NavBar showSearchBar={true}></NavBar>
      <ChooseGener></ChooseGener>
    </div>
  );
};

export default MovieSearch;
