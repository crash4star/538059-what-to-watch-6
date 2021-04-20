import React from "react";
import MainPage from "./MainPage";

const App = () => {
  return (
    <MainPage
      title={`The Grand Budapest Hotel`}
      src={`img/the-grand-budapest-hotel-poster.jpg`}
      alt={`The Grand Budapest Hotel`}
      genre={`Drama`}
      year={2014}
    />
  );
};

export default App;
