import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';

import films from "./mocks/films";
import reviews from './mocks/reviews';
import { reducer } from './store/reducer';

const store = createStore(
  reducer,
  composeWithDevTools()
);

// store.subscribe(() => {
//   console.log(store.getState());
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector(`#root`)
);
