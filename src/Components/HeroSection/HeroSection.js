import React, { useState, useEffect, useContext } from "react";
import "./HeroSection.css";
import { Context } from "./../Context";
import SvgCircle from "./../SvgCircle/SvgCircle";
import Checked from "./../../img/Checked.svg";
import Plus from "./../../img/Plus.svg";
import { Link } from "react-router-dom";
const HeroSection = ({ callBack }) => {
  const [bestMovie, setBestMovie] = useState();
  const [bestMovieDet, setBestMovieDet] = useState();
  const [value, setValue] = useState(0);
  const [radius, setRadius] = useState(0);
  const { setImg } = useContext(Context);
  const [saved, setSaved] = useState(Plus);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setBestMovie(data.results);

        fetch(
          `https://api.themoviedb.org/3/movie/${data.results[value].id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
          .then((response) => response.json())
          .then((data) => {
            setBestMovieDet(data);
            callBack(true);
            setImg(data.backdrop_path);
            setValue(value + 1);
            setRadius(((2 * 3.141592654 * 25) / 100) * data.vote_average * 10);
            setSaved(Plus);
            Object.keys(localStorage).forEach(function (key) {
              if (key === data.original_title) {
                setSaved(Checked);
              }
            });
          });
      });
    //eslint-dasable-next-line
  }, []);
  const add = () => {
    if (value === 19) {
      setValue(0);
    } else {
      setValue(value + 1);
    }
    fetch(
      `https://api.themoviedb.org/3/movie/${bestMovie[value].id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setBestMovieDet(data);
        setImg(data.backdrop_path);
        setSaved(Plus);
        Object.keys(localStorage).forEach(function (key) {
          if (key === data.original_title) {
            setSaved(Checked);
          }
        });
        setRadius(((2 * 3.141592654 * 25) / 100) * data.vote_average * 10);
      });
  };
  const addToFavourite = () => {
    if (saved === Checked) {
      localStorage.removeItem(bestMovieDet.original_title);
      setSaved(Plus);
    } else {
      localStorage.setItem(
        bestMovieDet.original_title,
        JSON.stringify(bestMovieDet)
      );
      setSaved(Checked);
    }
  };
  return (
    <div className="container">
      {bestMovieDet ? (
        <div>
          <div
            className="BlackFade"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${bestMovieDet.backdrop_path}) `,
            }}
          >
            <div className="contantcontainer">
              <div className="HeroPageContentContainer">
                <h1 className="title">
                  {bestMovieDet.original_title} (
                  {bestMovieDet.release_date.substring(0, 4)})
                </h1>

                <div className="SVGcontainer">
                  <SvgCircle
                    radius={radius}
                    vote_average={bestMovieDet.vote_average}
                    SvgClass={"circle-chart"}
                  ></SvgCircle>
                  <h1 className="score">User Score </h1>
                </div>
                <p className="overview">{bestMovieDet.overview}</p>

                <p className="tagline"> {bestMovieDet.tagline}</p>
                <div className="ButtonsContainer">
                  <div className="AddContainer" onClick={addToFavourite}>
                    <span style={{ backgroundImage: `url(${saved})` }}></span>
                    <h1>Add</h1>
                  </div>
                  <div className="PlayContainer">
                    <span></span>
                    <h1>
                      <a href={`/movie?q=${bestMovieDet.id}`}>See More</a>
                    </h1>
                  </div>
                </div>
                <ul className="InfoContainer">
                  <li>
                    <h2>Relised:</h2>
                    <h1>{bestMovieDet.release_date}</h1>
                  </li>
                  <li>
                    <h2>Time:</h2>
                    <h1>
                      {Math.floor(bestMovieDet.runtime / 60)}h
                      {bestMovieDet.runtime % 60}m
                    </h1>
                  </li>
                  <li>
                    <h2>Company:</h2>
                    <h1>
                      {bestMovieDet.production_companies.length !== 0
                        ? bestMovieDet.production_companies[0].name
                        : "Sorry but no"}
                    </h1>
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
              <Link className="HeroPageImgA" to={`/movie?q=${bestMovieDet.id}`}>
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w400/${bestMovieDet.poster_path}) `,
                  }}
                  className="HeroPageImg"
                ></div>
              </Link>{" "}
            </div>
            <div className="NextButton" onClick={add}></div>
          </div>{" "}
        </div>
      ) : (
        <h3 className="LodingText">Loding...</h3>
      )}{" "}
    </div>
  );
};

export default HeroSection;
