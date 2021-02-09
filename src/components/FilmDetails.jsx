import React from "react";

const FilmDetails = () => {
  return (
    <React.Fragment>
      <section classnName="movie-card movie-card--full">
        <div classnName="movie-card__hero">
          <div classnName="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 classnName="visually-hidden">WTW</h1>

          <header classnName="page-header movie-card__head">
            <div classnName="logo">
              <a href="main.html" classnName="logo__link">
                <span classnName="logo__letter logo__letter--1">W</span>
                <span classnName="logo__letter logo__letter--2">T</span>
                <span classnName="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div classnName="user-block">
              <div classnName="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div classnName="movie-card__wrap">
            <div classnName="movie-card__desc">
              <h2 classnName="movie-card__title">The Grand Budapest Hotel</h2>
              <p classnName="movie-card__meta">
                <span classnName="movie-card__genre">Drama</span>
                <span classnName="movie-card__year">2014</span>
              </p>

              <div classnName="movie-card__buttons">
                <button classnName="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button classnName="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" classnName="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div classnName="movie-card__wrap movie-card__translate-top">
          <div classnName="movie-card__info">
            <div classnName="movie-card__poster movie-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div classnName="movie-card__desc">
              <nav classnName="movie-nav movie-card__nav">
                <ul classnName="movie-nav__list">
                  <li classnName="movie-nav__item">
                    <a href="#" classnName="movie-nav__link">Overview</a>
                  </li>
                  <li classnName="movie-nav__item movie-nav__item--active">
                    <a href="#" classnName="movie-nav__link">Details</a>
                  </li>
                  <li classnName="movie-nav__item">
                    <a href="#" classnName="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div classnName="movie-card__text movie-card__row">
                <div classnName="movie-card__text-col">
                  <p classnName="movie-card__details-item">
                    <strong classnName="movie-card__details-name">Director</strong>
                    <span classnName="movie-card__details-value">Wes Andreson</span>
                  </p>
                  <p classnName="movie-card__details-item">
                    <strong classnName="movie-card__details-name">Starring</strong>
                    <span classnName="movie-card__details-value">
                      Bill Murray, <br />
                    Edward Norton, <br />
                    Jude Law, <br />
                    Willem Dafoe, <br />
                    Saoirse Ronan, <br />
                    Tony Revoloru, <br />
                    Tilda Swinton, <br />
                    Tom Wilkinson, <br />
                    Owen Wilkinson, <br />
                    Adrien Brody, <br />
                    Ralph Fiennes, <br />
                    Jeff Goldblum
                    </span>
                  </p>
                </div>

                <div classnName="movie-card__text-col">
                  <p classnName="movie-card__details-item">
                    <strong classnName="movie-card__details-name">Run Time</strong>
                    <span classnName="movie-card__details-value">1h 39m</span>
                  </p>
                  <p classnName="movie-card__details-item">
                    <strong classnName="movie-card__details-name">Genre</strong>
                    <span classnName="movie-card__details-value">Comedy</span>
                  </p>
                  <p classnName="movie-card__details-item">
                    <strong classnName="movie-card__details-name">Released</strong>
                    <span classnName="movie-card__details-value">2014</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div classnName="page-content">
        <section classnName="catalog catalog--like-this">
          <h2 classnName="catalog__title">More like this</h2>

          <div classnName="catalog__movies-list">
            <article classnName="small-movie-card catalog__movies-card">
              <div classnName="small-movie-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
              </div>
              <h3 classnName="small-movie-card__title">
                <a classnName="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
              </h3>
            </article>

            <article classnName="small-movie-card catalog__movies-card">
              <div classnName="small-movie-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
              </div>
              <h3 classnName="small-movie-card__title">
                <a classnName="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
              </h3>
            </article>

            <article classnName="small-movie-card catalog__movies-card">
              <div classnName="small-movie-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
              </div>
              <h3 classnName="small-movie-card__title">
                <a classnName="small-movie-card__link" href="movie-page.html">Macbeth</a>
              </h3>
            </article>

            <article classnName="small-movie-card catalog__movies-card">
              <div classnName="small-movie-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
              </div>
              <h3 classnName="small-movie-card__title">
                <a classnName="small-movie-card__link" href="movie-page.html">Aviator</a>
              </h3>
            </article>
          </div>
        </section>

        <footer classnName="page-footer">
          <div classnName="logo">
            <a href="main.html" classnName="logo__link logo__link--light">
              <span classnName="logo__letter logo__letter--1">W</span>
              <span classnName="logo__letter logo__letter--2">T</span>
              <span classnName="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div classnName="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment >
  );
};

export default FilmDetails;
