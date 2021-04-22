import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from 'prop-types';

import MainPage from "./MainPage";
import SignInPage from "./SignInPage";
import MyListPage from "./MyListPage";
import FilmPage from "./FilmPage";
import AddReviewPage from "./AddReviewPage";
import PlayerPage from "./PlayerPage";
import NotFoundPage from "./NotFoundPage";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage
            name={`The Grand Budapest Hotel`}
            poster_image={`img/the-grand-budapest-hotel-poster.jpg`}
            alt={`The Grand Budapest Hotel`}
            genre={`Drama`}
            year={2014}
            films={props.films}
          />
        </Route>
        <Route path="/login" exact>
          <SignInPage />
        </Route>
        <Route path="/mylist" exact>
          <MyListPage films={props.films} />
        </Route>
        <Route path="/films/:id" exact>
          <FilmPage film={props.films[4]}/>
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReviewPage film={props.films[4]}/>
        </Route>
        <Route path="/player/:id" exact>
          <PlayerPage film={props.films[4]}/>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired
};

export default App;
