import React from "react";
import Movie from "../Movie/Movie";

import "./MoviesList.css";

const MoviesList = ({ items }) => {
    const handleName = (name) => alert(`this movie's name is ${name}`);
    return (
      <div>
        <h2 className="title">MoviesList </h2>
        <div className="container">
          {items.map((el, i) => (
            <Movie item={el} key={i} handleName={handleName} />
          ))}
        </div>
      </div>
    );
  };
  export default MoviesList;