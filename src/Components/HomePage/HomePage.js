import React, { useState } from "react";
import HeroSection from "./../HeroSection/HeroSection";
import ChooseGener from "./../ChooseGener/ChooseGener";
import BackgroundImg from "./../BackgroundImg/BackgroundImg";
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
        <ChooseGener></ChooseGener>
      </Context.Provider>{" "}
    </div>
  );
};

export default HomePage;
