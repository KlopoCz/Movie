import React, { useEffect, useState } from "react";
import "./ChooseGener.css";
import GenreButton from "./../GenreButton/GenreButton";
import MovieCard from "./../MovieCard/MovieCard";

const ChooseGener = () => {
  const [allGenre, setAllGenre] = useState("");
  const [id, setId] = useState();
  const [movies, setMovies] = useState([]);
  const [num, setNum] = useState(1);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState();

  useEffect(() => {
    setPage(0);
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=de27f42e716edbcbf3d004f4f825bc85&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => {
        setAllGenre(data.genres);
      });
  }, []);
  useEffect(() => {
    if (search) {
      setPage(0);
      setMovies([]);
      setId();
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=de27f42e716edbcbf3d004f4f825bc85&language=en-US&query=${search}&page=${num}&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies([]);
          if (data) {
            setMovies(data.results);
            setPage(data.total_pages);
            console.log(data);
          }
        });
    }
  }, [search, num]);
  useEffect(() => {
    if (id) {
      setSearch("");
      setPage(0);
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=de27f42e716edbcbf3d004f4f825bc85&with_genres=${id}&page=${num}`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies([]);
          setPage(data.total_pages);
          setMovies((old) => old.concat(data.results));
          console.log(data);
        });
    }
  }, [id, num]);

  const getSelectectCallBack = (inedx) => {
    console.log(inedx);
    setId(inedx);
    setNum(1);

    console.log(movies);
  };
  return (
    <div className="Container">
      {allGenre ? (
        <div>
          <div className="BlackFadeGener"></div>
          <input
            className="SearchBar"
            onChange={(e) => {
              setSearch(e.target.value);
              setNum(1);
            }}
            value={search}
            placeholder="Search for something"
          ></input>
          {/* <h1 className="TitleGener">Choose Your Favourite Gener</h1> */}
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
            })}{" "}
          </div>
          {page ? (
            <div className="ButtonContainer">
              <div
                onClick={() => setNum(1)}
                style={num === 1 ? { display: "none" } : { display: "block" }}
              ></div>
              <div
                onClick={() => setNum(num - 1)}
                style={num === 1 ? { display: "none" } : { display: "block" }}
              ></div>
              <div
                onClick={() => setNum(num + 1)}
                style={
                  num === page ? { display: "none" } : { display: "block" }
                }
              ></div>
              <div
                onClick={() => setNum(page)}
                style={
                  num === page ? { display: "none" } : { display: "block" }
                }
              ></div>
            </div>
          ) : (
            ""
          )}
          <div className="MovieCardsContainer">
            {movies.filter((item) => item).length > 1 ? (
              movies.map((el, index) => {
                return <MovieCard key={index} el={el}></MovieCard>;
              })
            ) : (
              <h1 className="description">
                ↑ click on some gener to see all of your favourite movies ↑
              </h1>
            )}
          </div>

          {page ? (
            <div className="ButtonContainer">
              <div
                onClick={() => setNum(1)}
                style={num === 1 ? { display: "none" } : { display: "block" }}
              ></div>
              <div
                onClick={() => setNum(num - 1)}
                style={num === 1 ? { display: "none" } : { display: "block" }}
              ></div>
              <div
                onClick={() => setNum(num + 1)}
                style={
                  num === page ? { display: "none" } : { display: "block" }
                }
              ></div>
              <div
                onClick={() => setNum(page)}
                style={
                  num === page ? { display: "none" } : { display: "block" }
                }
              ></div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ChooseGener;
