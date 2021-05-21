import React from "react";
import { Link } from "react-router-dom";

import { IMG_API } from "../redux/const/MoviesConst";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const MoviesRecom = ({ id, title, poster_path, overview, vote_average }) => {
  return (
    <div className="MovieContent">
        <img
          src={
            poster_path
              ? IMG_API + poster_path
              : "https://images.unsplash.com/photo-1575919220112-0d5a2dc6a4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          }
          alt={title}
        />
      <div className="MoviesTitle">
        <button className="btn text-left">{title}</button>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
    </div>
  );
};

export default MoviesRecom;
