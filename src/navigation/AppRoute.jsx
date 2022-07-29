import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

function AppRoute(props) {
  return (
    <Route
      path={props.path}
      component={props.component}
      exact={props.exact || true}
    />
  );
}

AppRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool,
};

export default AppRoute;
