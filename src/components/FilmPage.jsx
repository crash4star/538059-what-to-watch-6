import React from "react";
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import TabsList from './TabsList';
import MoviesList from './MoviesList';

const FilmPage = (props) => {
  const { film } = props;
  const { films } = props;
  const { reviews } = props;
  const history = useHistory();

  const handleAddReview = (e) => {
    e.preventDefault();
    history.push(`/films/${film.name}/review`);
  };

  const genreFilter = (arr, genre) => {
    const genresArr = arr.map(movie => movie.genre.split('/'));
    const currentGenresArr = genre.split('/').map(item => item.toLowerCase());

    return genresArr.map((have, i) => (
      have.filter(match => currentGenresArr.indexOf(match.toLowerCase()) !== -1)
    ))
      .map((movie, i) => {
        return movie.length !== 0 ? arr[i] : false;
      })
      .filter(same => same.id !== film.id)
      .filter(result => result);
  };

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img
              src={film.backgroundImage}
              alt={film.alt}
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button" onClick={handleAddReview}>
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={film.posterImage}
                alt={film.name}
                width="218"
                height="327"
              />
            </div>

            <TabsList film={film} reviews={reviews} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList films={genreFilter(films, film.genre).slice(0, 4)} />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© {new Date().getFullYear()} What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

FilmPage.propTypes = {
  film: PropTypes.shape({
    backgroundImage: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired
  })
};

export default FilmPage;
