import React from 'react';
import PropTypes from 'prop-types';

const TabReviewItem = (props) => {
  const {review} = props;

  return (
    <>
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{review.comment}</p>
          <footer className="review__details">
            <cite className="review__author">{review.user.name}</cite>
            <time className="review__date" dateTime="2016-12-24">{review.date}</time>
          </footer>
        </blockquote>
        <div className="review__rating">{review.rating}</div>
      </div>
    </>
  );
};

TabReviewItem.propTypes = {
  review: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  })
};

export default TabReviewItem;
