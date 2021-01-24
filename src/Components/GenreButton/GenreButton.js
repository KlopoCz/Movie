import React, { useState } from "react";
import "./GenreButton.css";

const GenreButton = ({ name, id, getSelectectCallBack, selected }) => {
  const [ID, setID] = useState(id);
  return (
    <div
      style={selected ? { background: "#5AB3D8" } : { background: "#111111" }}
      onClick={() => getSelectectCallBack(ID)}
      className="GenreButton"
    >
      <span></span>
      {name}
    </div>
  );
};

export default GenreButton;
