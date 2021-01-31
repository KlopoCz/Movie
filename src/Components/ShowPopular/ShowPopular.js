import React, { useState, useEffect } from "react";
import "./ShowPopular.css";
import MovieCard from "./../MovieCard/MovieCard";

const ShowPopular = ({ url, name }) => {
  const [movieDate, setMovieData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setMovieData(data.results);
      });
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <div className="ShowPopularContainer">
        {movieDate ? (
          movieDate.filter((item) => item).length > 1 ? (
            movieDate.map((el, index) => {
              return <MovieCard key={index} el={el}></MovieCard>;
            })
          ) : (
            <h1 className="description">
              ↑ click on some gener to see all of your favourite movies ↑
            </h1>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ShowPopular;
