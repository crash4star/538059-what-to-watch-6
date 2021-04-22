import React, {useState} from "react";
import PropTypes from "prop-types";
import {useHistory} from 'react-router-dom';

const MovieCard = (props) => {
  const {preview_image = `none`} = props.data;
  const {alt = `none`} = props.data;
  const {name = `none`} = props.data;
  const {id = ``} = props.data;

  const [, setActiveCard] = useState(id);
  const history = useHistory();

  const handleGoToFilmPage = (e) => {
    e.preventDefault();
    history.push(`/films/${name}`);
  };

  return (
    <>
      <article className="small-movie-card catalog__movies-card" onMouseEnter={() => {
        setActiveCard(id);
      }}>
        <div className="small-movie-card__image">
          <img src={preview_image} alt={alt} width={280} height={175} />
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
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default MovieCard;
