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
import { checkAuth } from './api/api-actions';

const api = createApi(
  () => store.dispatch(ActionCreator.requiredAuthorization(false))
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  )
);

store.dispatch(checkAuth());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector(`#root`)
);
