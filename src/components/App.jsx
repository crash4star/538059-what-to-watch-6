import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "./MainPage";
import SignInPage from "./SignInPage";
import MyListPage from "./MyListPage";
import FilmPage from "./FilmPage";
import AddReviewPage from "./AddReviewPage";
import PlayerPage from "./PlayerPage";
import NotFoundPage from "./NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage
            title={`The Grand Budapest Hotel`}
            src={`img/the-grand-budapest-hotel-poster.jpg`}
            alt={`The Grand Budapest Hotel`}
            genre={`Drama`}
            year={2014}
          />
        </Route>
      </Switch>
      <Switch>
        <Route path="/login" exact>
          <SignInPage/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/mylist" exact>
          <MyListPage/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/films/:id" exact>
          <FilmPage/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/films/:id/review" exact>
          <AddReviewPage/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/player/:id" exact>
          <PlayerPage/>
        </Route>
      </Switch>
      <Switch>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
