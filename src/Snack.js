import React from "react";

function Snack({ name, image }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name}></img>
    </div>
  );
}

export default Snack;
