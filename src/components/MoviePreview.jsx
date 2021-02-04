import React from "react";
import PropTypes from 'prop-types';

const MoviePreview = (props) => {
  const {preview =
  {
    title: `Movie not found`,
    genre: `Genre not found`,
    year: new Date().getFullYear(),
    img: `https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg`
  }
  } = props;

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={preview.img} alt={preview.title} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{preview.title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{preview.genre}</span>
            <span className="movie-card__year">{preview.year}</span>
          </p>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div >
  );
};

MoviePreview.propTypes = {
  preview: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    img: PropTypes.string,
  })
};

export default MoviePreview;
