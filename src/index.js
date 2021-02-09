import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';


ReactDOM.render(
    <App
      preview={{
        title: `The Grand Budapest Hotel`,
        genre: `Drama`,
        year: 2014,
        img: `img/the-grand-budapest-hotel-poster.jpg`
      }}
    />,
    document.querySelector(`#root`)
);
