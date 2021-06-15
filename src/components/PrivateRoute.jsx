import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ render, path, exact, authorizationStatus }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus ? render(routeProps) : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
});

export { PrivateRoute };
export default connect(mapStateToProps,)(PrivateRoute);