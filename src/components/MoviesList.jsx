import React from 'react';
import PropTypes from "prop-types";

import MovieCard from "./MovieCard";

const MoviesList = (props) => {
  const films = props.films;

  return (
    <>
      <div className="catalog__movies-list">
        {films.map((item) => (
          <MovieCard data={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

MoviesList.propTypes = {
  films: PropTypes.array.isRequired
};

export default MoviesList;
