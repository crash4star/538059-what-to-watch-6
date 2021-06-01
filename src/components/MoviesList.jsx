import React from 'react';
import { connect } from 'react-redux';

import MovieCard from "./MovieCard";

const MoviesList = (props) => {
  const {films} = props;
  
  return (
    <>
      <div className="catalog__movies-list">
        {films.map((item, i) => {
          return <MovieCard data={item} key={item.id} />
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  films: state.films
});

export { MoviesList };
export default connect(mapStateToProps, )(MoviesList);
