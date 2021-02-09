import React, { useState, useEffect } from "react";
import "./ShowPopular.css";
import MovieCard from "./../MovieCard/MovieCard";
import Trail from "./../Fetch";

const ShowPopular = ({ url, name }) => {
  const [movieDate, setMovieData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data.results);
      });
  }, [url]);
  return (
    <div>
      <h1 className="ShowPopularTitle">{name}</h1>
      <div className="ShowPopularContainer">
        <Trail open={true} className="trails-main-row">
          {movieDate
            ? movieDate.filter((item) => item).length > 1
              ? movieDate.map((el, index) => {
                  return <MovieCard key={index} el={el}></MovieCard>;
                })
              : ""
            : ""}
        </Trail>
      </div>
    </div>
  );
};

export default ShowPopular;
