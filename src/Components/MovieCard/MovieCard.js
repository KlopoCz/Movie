import React from "react";
import SvgCircle from "./../SvgCircle/SvgCircle";
import "./MovieCard.css";

const MovieCard = ({ el }) => {
  return (
    <div className="MovieCardContainer">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300/${el.poster_path}) `,
        }}
        className="CardImg"
      ></div>
      <SvgCircle
        radius={((2 * 3.141592654 * 25) / 100) * el.vote_average * 10}
        vote_average={el.vote_average}
        SvgClass="SvgClass"
      ></SvgCircle>
      <h1 className="CardTitle">{el.original_title}</h1>
      <h1 className="CardDate">{el.release_date}</h1>
    </div>
  );
};

export default MovieCard;
