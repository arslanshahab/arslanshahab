import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio/Portfolio";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/project/:id",
    component: Portfolio,
    exact: true
  },
];
