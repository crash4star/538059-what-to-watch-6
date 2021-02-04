import React from "react";
import MainPage from './MainPage';
import PropTypes from 'prop-types';

const App = (props) => {
  const {preview} = props;

  return <MainPage preview={preview} />;
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
