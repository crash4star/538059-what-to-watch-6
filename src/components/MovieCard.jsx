import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {useHistory} from 'react-router-dom';

import Player from './Player';

const MovieCard = (props) => {
  const {name = `Not found`} = props.data;
  const {preview_video_link} = props.data;
  const {preview_image} = props.data;

  const [moviePoster, setMoviePoster] = useState(preview_image);
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
    setMoviePoster(preview_image);
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
            preview={preview_video_link}
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
    preview_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    preview_video_link: PropTypes.string.isRequired
  }),
};

export default MovieCard;
