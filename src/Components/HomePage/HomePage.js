import React, { useState } from "react";
import HeroSection from "./../HeroSection/HeroSection";
import ChooseGener from "./../ChooseGener/ChooseGener";
import BackgroundImg from "./../BackgroundImg/BackgroundImg";
import Footer from "./../Footer/Footer";
import { Context } from "./../Context";

const HomePage = () => {
  const [img, setImg] = useState();
  return (
    <div>
      <Context.Provider value={{ img, setImg }}>
        <HeroSection></HeroSection>
        <ChooseGener></ChooseGener>
        <BackgroundImg></BackgroundImg>
        <Footer></Footer>
      </Context.Provider>
    </div>
  );
};

export default HomePage;
