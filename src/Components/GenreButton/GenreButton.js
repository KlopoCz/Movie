import React, { useState } from "react";
import "./GenreButton.css";

const GenreButton = ({ name, id }) => {
  const [ID, setID] = useState(id);
  return (
    <div className="GenreButton">
      <span></span>
      {name}
    </div>
  );
};

export default GenreButton;
