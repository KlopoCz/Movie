import React, { useState } from "react";
import HeroSection from "./../HeroSection/HeroSection";
import ShowPopular from "./../ShowPopular/ShowPopular";
import "./HomePage.css";

import { Context } from "./../Context";

const HomePage = () => {
  const [img, setImg] = useState();
  return (
    <div>
      <Context.Provider value={{ img, setImg }}>
        <HeroSection></HeroSection>

        <ShowPopular
          url={`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`}
          name="Upcoming"
        ></ShowPopular>
        <ShowPopular
          url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`}
          name="Top Rated"
        ></ShowPopular>
        <ShowPopular
          url={`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`}
          name="Popular"
        ></ShowPopular>
      </Context.Provider>{" "}
    </div>
  );
};

export default HomePage;
