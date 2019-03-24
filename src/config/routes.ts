import { paths } from "../constants/paths";
import { Home } from "../pages/Home";
import { Route } from "../types";

const routes: Route[] = [
  {
    component: Home,
    exact: true,
    path: paths.HOME
  }
];

export default routes;
