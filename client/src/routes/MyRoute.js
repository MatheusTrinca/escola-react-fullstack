import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const MyRoute = ({ component: Component, isClosed, ...rest }) => {
  const isLoggedIn = true;
  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }
  return <Route component={Component} {...rest} />;
};

export default MyRoute;

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
