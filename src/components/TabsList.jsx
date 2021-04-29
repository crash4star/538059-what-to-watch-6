import React, {useState} from 'react';
import PropTypes from 'prop-types';

import TabOverview from './TabOverview';
import TabDetails from './TabDetails';
import TabReviews from './TabReviews';

const Tabs = (props) => {
  const film = props.film;
  const reviews = props.reviews;
  const TABS = [`Overview`, `Details`, `Reviews`];

  const [tabStatus, setTabStatus] = useState(TABS[0]);

  const handleTabOnClick = (e) => {
    e.preventDefault();
    const currentTargetName = e.target.textContent;
    setTabStatus(currentTargetName);
  };

  return (
    <>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {TABS.map((tab, i) => (
              <li className={`movie-nav__item ${tab === tabStatus && `movie-nav__item--active`}`}
                key={`${tab}-${i}`}>
                <a href="#"
                  className="movie-nav__link"
                  onClick={handleTabOnClick}>
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {tabStatus === `Overview` ? <TabOverview film={film} /> : false}
        {tabStatus === `Details` ? <TabDetails film={film} /> : false}
        {tabStatus === `Reviews` ? <TabReviews film={film} reviews={reviews} /> : false}
      </div>
    </>
  );
};

Tabs.propTypes = {
  film: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired
};

export default Tabs;
