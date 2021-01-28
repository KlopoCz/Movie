import React, { useEffect, useState } from "react";
import SvgCircle from "./../SvgCircle/SvgCircle";
import "./MoviePage.css";

const MoviePage = ({ location }) => {
  const [movieData, setMovieData] = useState();
  const [radius, setRadius] = useState();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q");
    console.log(q);
    fetch(
      `https://api.themoviedb.org/3/movie/${q}?api_key=de27f42e716edbcbf3d004f4f825bc85&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data);
        console.log(data);
        setRadius(((2 * 3.141592654 * 25) / 100) * data.vote_average * 10);
      });
  }, []);
  return (
    <div>
      {movieData ? (
        <div>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path}) `,
            }}
            className="MoviePageBackgroundImg"
          >
            <div>
              <div>
                <h1>{movieData.original_title}</h1>
                <h1>{movieData.release_date}</h1>
              </div>
              <div>
                <h1>{movieData.status}</h1>
                <ul className="GenersContainerMovie">
                  {movieData.genres.length > 0 ? (
                    <div>
                      <li>{movieData.genres[0].name}</li>
                    </div>
                  ) : (
                    ""
                  )}
                  {movieData.genres.length > 1 ? (
                    <div>
                      <li> - </li>
                      <li>{movieData.genres[1].name}</li>
                    </div>
                  ) : (
                    ""
                  )}
                  {movieData.genres.length > 2 ? (
                    <div>
                      <li> - </li>
                      <li>{movieData.genres[2].name}</li>
                    </div>
                  ) : (
                    ""
                  )}
                  {movieData.genres.length > 3 ? (
                    <div>
                      <li> - </li>
                      <li>{movieData.genres[3].name}</li>
                    </div>
                  ) : (
                    ""
                  )}
                  {movieData.genres.length > 4 ? (
                    <div>
                      <li> - </li>
                      <li>{movieData.genres[4].name}</li>
                    </div>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
              <div>
                <SvgCircle
                  radius={radius}
                  vote_average={movieData.vote_average}
                  SvgClass={"MoviePageCircle"}
                ></SvgCircle>
                <h1>User Score</h1>
              </div>
              <div>
                <span></span>
                <span></span>
                <h1>Watch Trailer</h1>
              </div>
              <h1>Overview</h1>
              <p>{movieData.overview}</p>
              <h2>{movieData.tagline}</h2>
              <div>
                <div>
                  <h2>Relised</h2>
                  <h1>{movieData.release_date}</h1>
                </div>
                <div>
                  <h2>Time</h2>
                  <h1>{movieData.runtime}</h1>
                </div>
                <div>
                  <h2>Company</h2>
                  <h1>{movieData.production_companies[0].name}</h1>
                </div>
                <div>
                  <h2>Language</h2>
                  <h1>{movieData.original_language}</h1>
                </div>
                <div>
                  <h2>Budget</h2>
                  <h1>{movieData.budget}</h1>
                </div>
                <div>
                  <h2>Revenue</h2>
                  <h1>{movieData.revenue}</h1>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData.poster_path}) `,
              }}
              className="MoviePageImg"
            ></div>
          </div>
        </div>
      ) : (
        "Loding..."
      )}
    </div>
  );
};

export default MoviePage;
