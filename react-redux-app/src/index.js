import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./reducer/store.js";
import "./index.css";

const target = document.querySelector("#root");
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
