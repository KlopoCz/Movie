import React, { useContext } from "react";
import "./BackgroundImg.css";
import { Context } from "./../Context";

const BackgroundImg = () => {
  const { img, setImg } = useContext(Context);
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${img}) `,
      }}
      className="BackgroundImg"
    ></div>
  );
};

export default BackgroundImg;
