import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Saved.css";
import Trail from "./../Fetch";

const Saved = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    for (let i in localStorage) {
      if (localStorage.hasOwnProperty(i)) {
        setMovieData((old) => old.concat(JSON.parse(localStorage[i])));
      }
    }
  }, []);
  const remove = (key, index) => {
    console.log(key);
    localStorage.removeItem(key);
    let array = [...movieData];

    array.splice(index, 1);
    setMovieData(array);
  };
  return (
    <div className="MovieCardsContainer">
      <Trail open={true} className="trails-main">
        {movieData.length !== 0 ? (
          movieData.map((el, index) => {
            return (
              <div key={index} className="FavouriteMovieCardContainer">
                <MovieCard el={el}></MovieCard>
                <div
                  className="removeButton"
                  onClick={() => remove(el.original_title, index)}
                >
                  {" "}
                  REMOVE
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="saveddescription">no saved movies</h1>
        )}
      </Trail>
    </div>
  );
};

export default Saved;
