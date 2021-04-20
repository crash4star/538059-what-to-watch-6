import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="user-page">
        <div
          style={{
            marginBottom: `15rem`,
            marginTop: `10rem`,
            paddingTop: `5rem`,
          }}
        >
          <h1
            style={{
              textAlign: `center`,
              fontSize: `120px`,
            }}
          >
            404
          </h1>
          <p
            style={{
              textAlign: `center`,
            }}
          >
            page not found
          </p>
          <BrowserRouter>
            <Link to="/" style={{
              display: `block`,
              width: `10rem`,
              margin: `0 auto`,
              marginTop: `2rem`,
              borderRadius: `5px`,
              background: `#ffffff`,
              padding: `1rem`,
              fontSize: `14px`,
              textDecoration: `none`,
              color: `#333333`
            }}>Back to main page</Link>
          </BrowserRouter>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© {new Date().getFullYear()} What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default NotFoundPage;
