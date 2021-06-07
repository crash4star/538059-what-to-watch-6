import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainPage from "./MainPage";
import SignInPage from "./SignInPage";
import MyListPage from "./MyListPage";
import FilmPage from "./FilmPage";
import AddReviewPage from "./AddReviewPage";
import PlayerPage from "./PlayerPage";
import NotFoundPage from "./NotFoundPage";
import { fetchFilmsList } from '../api/api-actions';

const App = (props) => {
  const { films, reviews, isDataLoaded, onLoadData } = props;

  useEffect(() => {
    if (isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage
            name={`The Grand Budapest Hotel`}
            posterImage={`img/the-grand-budapest-hotel-poster.jpg`}
            alt={`The Grand Budapest Hotel`}
            genre={`Drama`}
            year={2014}
            films={films}
          />
        </Route>
        <Route path="/login" exact>
          <SignInPage />
        </Route>
        <Route path="/mylist" exact>
          <MyListPage films={films} />
        </Route>
        <Route path="/films/:id" exact>
          <FilmPage film={films[4]} reviews={reviews} films={films} />
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReviewPage film={films[4]} />
        </Route>
        <Route path="/player/:id" exact>
          <PlayerPage film={films[4]} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  reviews: state.reviews,
  isDataLoaded: state.isDataLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFilmsList())
  }
});

export { App }
export default connect(mapStateToProps, mapDispatchToProps)(App);