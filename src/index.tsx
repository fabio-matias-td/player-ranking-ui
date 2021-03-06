import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import configureHistory from "./config/history";
import routes from "./config/routes";
import configureStore from "./config/store";

import { App } from "./containers/App";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");
const store = configureStore();
const history = configureHistory();

function renderApp() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App routes={routes} />
      </Router>
    </Provider>,
    rootElement
  );
}

renderApp();

if (module.hot) {
  module.hot.accept("./index.tsx", () => {
    renderApp();
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
