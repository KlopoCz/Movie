import React, { useEffect, useState } from "react";
import SvgCircle from "./../SvgCircle/SvgCircle";
import NavBar from "./../NavBar/NavBar";
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
      <NavBar showSearchBar={true}></NavBar>
      {movieData ? (
        <div>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movieData.backdrop_path}) `,
            }}
            className="MoviePageBackgroundImg"
          >
            <div className="MoviePgeContentContainer">
              <div className="MoviePageTitleContainer">
                <h1 className="MoviePageTitle">
                  {movieData.original_title}
                  {"   "}
                  <span>({movieData.release_date.substring(0, 4)})</span>
                </h1>
              </div>
              <div className="StatusGenerCont">
                <h1 className="MoviePageStatus">{movieData.status}</h1>
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
              <div className="MoviePageButtonsRateContainer">
                <div className="MoviePageUserScoreContainer">
                  <SvgCircle
                    radius={radius}
                    vote_average={movieData.vote_average}
                    SvgClass={"MoviePageCircle"}
                  ></SvgCircle>
                  <h1>User Score</h1>
                </div>
                <div className="MovieButtonsContainer">
                  <span className="first"></span>
                  <span className="last"></span>
                </div>
              </div>
              <h1 className="MoviePageOverview">Overview</h1>
              <p className="MoviePageOverviewP">{movieData.overview}</p>
              <h2 className="MoviePageTagline">{movieData.tagline}</h2>
              <div className="MoreInfoContainer">
                <div>
                  <div>
                    <h2>Relised:</h2>
                    <h1>{movieData.release_date}</h1>
                  </div>
                  <div>
                    <h2>Time:</h2>
                    <h1>{movieData.runtime}</h1>
                  </div>
                  <div>
                    <h2>Company:</h2>
                    <h1>
                      {movieData.production_companies[0]
                        ? movieData.production_companies[0].name
                        : ""}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h2>Language:</h2>
                    <h1>{movieData.original_language}</h1>
                  </div>
                  <div>
                    <h2>Budget:</h2>
                    <h1>{movieData.budget}</h1>
                  </div>
                  <div>
                    <h2>Revenue:</h2>
                    <h1>{movieData.revenue}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w400/${movieData.poster_path}) `,
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
