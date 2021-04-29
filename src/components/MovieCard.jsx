import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {useHistory} from 'react-router-dom';

import Player from './Player';

const MovieCard = (props) => {
  const {name = `Not found`} = props.data;
  const {previewVideoLink} = props.data;
  const {previewImage} = props.data;

  const [moviePoster, setMoviePoster] = useState(previewImage);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoverStatus, setHoverOnCard] = useState(false);
  const history = useHistory();

  const handleGoToFilmPage = (e) => {
    e.preventDefault();
    history.push(`/films/${name}`);
  };

  const handleMouseOnCard = () => {
    setHoverOnCard(true);
  };

  const handleMouseLeaveCard = () => {
    setMoviePoster(previewImage);
    setIsPlaying(false);
    setHoverOnCard(false);
  };

  const handleOnTimeOut = () => {
    setMoviePoster(``);
    setIsPlaying(true);
  };

  useEffect(() => {
    const timer = hoverStatus && setTimeout(handleOnTimeOut, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [hoverStatus]);

  return (
    <>
      <article className="small-movie-card catalog__movies-card" onMouseEnter={handleMouseOnCard} onMouseLeave={handleMouseLeaveCard}>
        <div className="small-movie-card__image">
          <Player
            preview={previewVideoLink}
            poster={moviePoster}
            isPlaying={isPlaying}
            data={props.data} />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={handleGoToFilmPage}>
            {name}
          </a>
        </h3>
      </article>
    </>
  );
};

MovieCard.propTypes = {
  data: PropTypes.shape({
    previewImage: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired
  }),
};

export default MovieCard;
