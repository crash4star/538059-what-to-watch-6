import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './components/App';
import { reducer } from './store/reducer';
import { createApi } from './api/api';
import { ActionCreator } from './store/action';
import { films } from './mocks/films';

const api = createApi(
  () => store.dispatch(ActionCreator.getFilms(films))
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector(`#root`)
);
