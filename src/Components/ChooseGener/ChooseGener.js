import React, { useEffect, useState } from "react";
import "./ChooseGener.css";
import GenreButton from "./../GenreButton/GenreButton";
import MovieCard from "./../MovieCard/MovieCard";

const ChooseGener = () => {
  const [allGenre, setAllGenre] = useState("");
  const [id, setId] = useState();
  const [movies, setMovies] = useState([]);
  const [num, setNum] = useState(-2);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=de27f42e716edbcbf3d004f4f825bc85&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => {
        setAllGenre(data.genres);
      });
  }, []);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=de27f42e716edbcbf3d004f4f825bc85&with_genres=${id}&page=${num}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies([]);
        setMovies((old) => old.concat(data.results));

        fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=de27f42e716edbcbf3d004f4f825bc85&with_genres=${id}&page=${
            num + 1
          }`
        )
          .then((response) => response.json())
          .then((data) => {
            setMovies((old) => old.concat(data.results));

            fetch(
              `https://api.themoviedb.org/3/discover/movie?api_key=de27f42e716edbcbf3d004f4f825bc85&with_genres=${id}&page=${
                num + 2
              }`
            )
              .then((response) => response.json())
              .then((data) => {
                setMovies((old) => old.concat(data.results));

                console.log(data);
              });
          });
      });
  }, [id]);

  const getSelectectCallBack = (inedx) => {
    console.log(inedx);
    setId(inedx);
    setNum(num + 3);
    console.log(movies);
  };
  return (
    <div className="Container">
      {allGenre ? (
        <div>
          <div className="BlackFadeGener"></div>
          <h1 className="TitleGener">Choose Your Favourite Gener</h1>
          <div className="GenerContainer">
            {allGenre.map((element) => {
              return (
                <GenreButton
                  name={element.name}
                  id={element.id}
                  getSelectectCallBack={getSelectectCallBack}
                  selected={element.id === id ? true : false}
                  key={element.id}
                ></GenreButton>
              );
            })}
            {}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ChooseGener;
