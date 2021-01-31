import React, { useState } from "react";
import HeroSection from "./../HeroSection/HeroSection";
import ShowPopular from "./../ShowPopular/ShowPopular";
import BackgroundImg from "./../BackgroundImg/BackgroundImg";
import NavBar from "./../NavBar/NavBar";
import "./HomePage.css";

import { Context } from "./../Context";

const HomePage = () => {
  const [img, setImg] = useState();
  return (
    <div>
      <Context.Provider value={{ img, setImg }}>
        <div className="HomeCont">
          <HeroSection></HeroSection>
          <BackgroundImg></BackgroundImg>
        </div>
        <NavBar showSearchBar={true}></NavBar>
        <ShowPopular
          url={
            "https://api.themoviedb.org/3/movie/upcoming?api_key=de27f42e716edbcbf3d004f4f825bc85&language=en-US&page=1"
          }
          name="Upcoming"
        ></ShowPopular>
        <ShowPopular
          url={
            "https://api.themoviedb.org/3/movie/top_rated?api_key=de27f42e716edbcbf3d004f4f825bc85&language=en-US&page=1"
          }
          name="Top Rated"
        ></ShowPopular>
        <ShowPopular
          url={
            "https://api.themoviedb.org/3/movie/popular?api_key=de27f42e716edbcbf3d004f4f825bc85&language=en-US&page=1"
          }
          name="Popular"
        ></ShowPopular>
      </Context.Provider>{" "}
    </div>
  );
};

export default HomePage;
