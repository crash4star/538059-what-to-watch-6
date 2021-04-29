import React from 'react';
import PropTypes from 'prop-types';

const TabOverview = (props) => {
  const {film} = props;

  const getFilmRating = (rating) => {
    const modRating = +rating;

    switch (true) {
      case modRating < 3:
        return 'Bad';
        break;

      case modRating > 3 && modRating < 5:
        return 'Normal';
        break;

      case modRating > 5 && modRating < 8:
        return 'Good';
        break;

      case modRating > 8 && modRating < 10:
        return 'Very good';
        break;

      case modRating === 10:
        return 'Awesome';
        break;
    
      default:
        break;
    }
  };

  console.log(getFilmRating(film.rating));
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getFilmRating(film.rating)}</span>
          <span className="movie-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>
          {film.description}
        </p>

        <p className="movie-card__director">
          <strong>Director: {film.director}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>
            Starring: {film.starring.map((item, i, arr) => i < arr.length ? `${item}, ` : `${item}`)} and other
          </strong>
        </p>
      </div>
    </>
  );
};

TabOverview.propTypes = {
  film: PropTypes.shape({
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired
  })
};

export default TabOverview;
