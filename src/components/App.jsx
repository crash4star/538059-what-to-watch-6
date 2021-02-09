import React from "react";
import MainPage from './MainPage';
import SignIn from './SignIn';
import MyList from './MyList';
import Film from './Film';
import AddReview from './AddReview';
import Player from './Player';
import NotFound from './NotFound';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = ({preview}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage preview={preview} />
        </Route>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/mylist" exact>
          <MyList />
        </Route>
        <Route path="/films/:id" exact component={Film} />
        <Route path="/films/:id/review" exact component={AddReview} />
        <Route path="/player/:id" exact component={Player} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  preview: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    img: PropTypes.string,
  })
};

export default App;
