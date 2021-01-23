import React, { useEffect, useState } from "react";
import "./ChooseGener.css";
import GenreButton from "./../GenreButton/GenreButton";

const ChooseGener = () => {
  const [allGenre, setAllGenre] = useState("");
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=de27f42e716edbcbf3d004f4f825bc85&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => {
        setAllGenre(data.genres);
        console.log(data.genres);
      });
  }, []);
  return (
    <div className="Container">
      {allGenre ? (
        <div>
          <div className="BlackFadeGener"></div>
          <h1 className="TitleGener">Choose Your Favourite Gener</h1>
          <div className="GenerContainer">
            {allGenre.map((element) => {
              return (
                <GenreButton name={element.name} id={element.id}></GenreButton>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ChooseGener;
