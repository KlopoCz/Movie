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
        <ShowPopular></ShowPopular>
      </Context.Provider>{" "}
    </div>
  );
};

export default HomePage;
