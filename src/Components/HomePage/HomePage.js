import React, { useState } from "react";
import HeroSection from "./../HeroSection/HeroSection";
import ChooseGener from "./../ChooseGener/ChooseGener";
import BackgroundImg from "./../BackgroundImg/BackgroundImg";

import { Context } from "./../Context";

const HomePage = () => {
  const [img, setImg] = useState();
  return (
    <div>
      <Context.Provider value={{ img, setImg }}>
        <HeroSection></HeroSection>
        <ChooseGener></ChooseGener>
        <BackgroundImg></BackgroundImg>
      </Context.Provider>{" "}
    </div>
  );
};

export default HomePage;
