import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer.js";

import { composeWithDevTools } from "redux-devtools-extension";

import "./app.css";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

function App() {
  return (
    <div className="App">
      <h1>Hello </h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
export default App;
