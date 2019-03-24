import React from "react";
import { Route, Switch } from "react-router";
import { Route as RouteType } from "../../types";

interface Props {
  routes: RouteType[];
}

export function App({ routes }: Props) {
  return (
    <div className="App">
      <Switch>
        {routes.map((route: RouteType) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </div>
  );
}
