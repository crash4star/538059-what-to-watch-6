import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {src = `none`} = props.data;
  const {alt = `none`} = props.data;
  const {width = `none`} = props.data;
  const {height = `none`} = props.data;
  const {title = `none`} = props.data;

  return (
    <>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={src} alt={alt} width={width} height={height} />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">
            {title}
          </a>
        </h3>
      </article>
    </>
  );
};

MovieCard.propTypes = {
  data: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default MovieCard;
