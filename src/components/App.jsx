import React, { useEffect } from "react";
import { Router as BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainPage from "./MainPage";
import SignInPage from "./SignInPage";
import MyListPage from "./MyListPage";
import FilmPage from "./FilmPage";
import AddReviewPage from "./AddReviewPage";
import PlayerPage from "./PlayerPage";
import NotFoundPage from "./NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import { fetchFilmsList } from '../api/api-actions';
import browserHistory from "../history/browser-history";

const App = (props) => {
  const { films, reviews, isDataLoaded, onLoadData } = props;

  useEffect(() => {
    if (isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path='/login' exact>
          <SignInPage />
        </Route>
        <Route exact path='/'>
          <MainPage
            name={`The Grand Budapest Hotel`}
            posterImage={`img/the-grand-budapest-hotel-poster.jpg`}
            alt={`The Grand Budapest Hotel`}
            genre={`Drama`}
            year={2014}
            films={films}
          />}
        </Route>
        <PrivateRoute exact
          path='/mylist'
          render={() => <MyListPage films={films} />}
        >
        </PrivateRoute>
        <PrivateRoute exact
          path="/films/:id"
          render={() => <FilmPage film={films[4]} reviews={reviews} films={films} />}
        >
        </PrivateRoute>
        <PrivateRoute exact
          path="/films/:id/review"
          render={() => <AddReviewPage film={films[4]} />}
        >
        </PrivateRoute>
        <PrivateRoute exact
          path="/player/:id"
          render={() => <PlayerPage film={films[4]} />}
        >
        </PrivateRoute>
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