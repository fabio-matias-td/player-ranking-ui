import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");

function renderApp() {
  ReactDOM.render(<App />, rootElement);
}

renderApp();

if (module.hot) {
  module.hot.accept("./app/App", () => {
    renderApp();
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
