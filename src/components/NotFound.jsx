import React from "react";

const NotFound = () => {
  return (
    <React.Fragment>
      <section className="not-found">
        <h1 style={{
          margin: `0 auto`,
          marginTop: `20rem`,
          fontSize: `10rem`,
          textAlign: `center`
        }}>404</h1>
        <p style={{
          margin: `0 auto`,
          marginTop: `5rem`,
          textAlign: `center`
        }}>Page not found</p>
        <a href="/" style={{
          display: `block`,
          margin: `0 auto`,
          marginTop: `3rem`,
          textAlign: `center`
        }}>Go to main page</a>
      </section>
    </React.Fragment >
  );
};

export default NotFound;
