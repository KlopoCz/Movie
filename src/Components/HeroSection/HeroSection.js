import React, { useState, useEffect, useContext } from "react";
import "./HeroSection.css";
import { Context } from "./../Context";

const HeroSection = () => {
  const [bestMovie, setBestMovie] = useState();
  const [bestMovieDet, setBestMovieDet] = useState();
  const [value, setValue] = useState(0);
  const [radius, setRadius] = useState(0);
  const { img, setImg } = useContext(Context);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=de27f42e716edbcbf3d004f4f825bc85&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setBestMovie(data.results);

        fetch(
          `https://api.themoviedb.org/3/movie/${data.results[value].id}?api_key=de27f42e716edbcbf3d004f4f825bc85&language=en-US`
        )
          .then((response) => response.json())
          .then((data) => {
            setBestMovieDet(data);

            setImg(data.backdrop_path);
            setValue(value + 1);
            setRadius(((2 * 3.141592654 * 25) / 100) * data.vote_average * 10);
          });
      });
  }, []);
  const add = () => {
    if (value === 6) {
      setValue(0);
    } else {
      setValue(value + 1);
    }
    fetch(
      `https://api.themoviedb.org/3/movie/${bestMovie[value].id}?api_key=de27f42e716edbcbf3d004f4f825bc85&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setBestMovieDet(data);
        setImg(data.backdrop_path);

        setRadius(((2 * 3.141592654 * 25) / 100) * data.vote_average * 10);
      });
  };

  return (
    <div className="container">
      {bestMovieDet ? (
        <div>
          <div className="BlackFade" onClick={add}>
            <h1 className="title">{bestMovieDet.original_title}</h1>
            <h1 className="year">
              ({bestMovieDet.release_date.substring(0, 4)})
            </h1>
            <div className="SVGcontainer">
              <svg
                className="circle-chart"
                // viewBox="0 0 180 180"
                width="64"
                height="64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="circle-chart__background"
                  stroke="#111111"
                  strokeWidth="5"
                  fill="none"
                  cx="32"
                  cy="32"
                  r="25"
                />
                <circle
                  className="circle-chart__circle"
                  stroke="#00acc1"
                  strokeWidth="5"
                  strokeDasharray={radius}
                  strokeLinecap="round"
                  fill="none"
                  cx="32"
                  cy="32"
                  r="25"
                />
                <text
                  className="circle-chart__percent"
                  x="32"
                  y="40"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontSize="22"
                  fill="#ffffff"
                >
                  {bestMovieDet.vote_average}
                </text>
              </svg>
              <h1 className="score">User Score </h1>
            </div>
            <p className="overview">
              {bestMovieDet.overview.substring(0, 230)} Read More
            </p>
            <hr></hr>
            <p className="tagline"> {bestMovieDet.tagline}</p>
            <div className="ButtonsContainer">
              <div className="AddContainer">
                <span></span>
                <h1>Add</h1>
              </div>
              <div className="PlayContainer">
                <span></span>
                <h1>Play</h1>
              </div>
            </div>
            <ul className="InfoContainer">
              <li>
                <h1>{bestMovieDet.release_date}</h1>
                <h2>Relised</h2>
              </li>
              <li>
                <h1>
                  {Math.floor(bestMovieDet.runtime / 60)}h
                  {bestMovieDet.runtime % 60}m
                </h1>
                <h2>Time</h2>
              </li>
              <li>
                <h1>
                  {bestMovieDet.production_companies.length !== 0
                    ? bestMovieDet.production_companies[0].name
                    : "Sorry but no"}
                </h1>
                <h2>Company</h2>
              </li>
            </ul>
            <ul className="GenersContainer">
              {bestMovieDet.genres.length > 0 ? (
                <div>
                  <li>{bestMovieDet.genres[0].name}</li>
                </div>
              ) : (
                ""
              )}
              {bestMovieDet.genres.length > 1 ? (
                <div>
                  <li> - </li>
                  <li>{bestMovieDet.genres[1].name}</li>
                </div>
              ) : (
                ""
              )}
              {bestMovieDet.genres.length > 2 ? (
                <div>
                  <li> - </li>
                  <li>{bestMovieDet.genres[2].name}</li>
                </div>
              ) : (
                ""
              )}
              {bestMovieDet.genres.length > 3 ? (
                <div>
                  <li> - </li>
                  <li>{bestMovieDet.genres[3].name}</li>
                </div>
              ) : (
                ""
              )}
              {bestMovieDet.genres.length > 4 ? (
                <div>
                  <li> - </li>
                  <li>{bestMovieDet.genres[4].name}</li>
                </div>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      ) : (
        <h3 className="LodingText">Loding...</h3>
      )}
    </div>
  );
};

export default HeroSection;
