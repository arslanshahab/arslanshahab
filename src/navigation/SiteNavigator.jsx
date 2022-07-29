import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import AppRoute from "./AppRoute";
import { routes } from "./routes";

function SiteNavigator() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <AppRoute path={route.path} component={route.component} exact={route.exact} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default SiteNavigator;
