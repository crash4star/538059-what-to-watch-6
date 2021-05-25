import React from 'react';
import { connect } from 'react-redux';

import MovieCard from "./MovieCard";

const MoviesList = (props) => {
  const {visibleFilms} = props;
  
  return (
    <>
      <div className="catalog__movies-list">
        {visibleFilms.map((item, i) => {
          return <MovieCard data={item} key={item.id} />
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  visibleFilms: state.visibleFilms
});

export { MoviesList };
export default connect(mapStateToProps, )(MoviesList);
