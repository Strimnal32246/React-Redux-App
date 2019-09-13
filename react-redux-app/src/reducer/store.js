import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { Router, Route, browserHistory } from "react-router";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

const history = syncHistoryWithStore(browserHistory, store);

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
);

ReactDOM.render(
  <Provider store={store}>
    {/* Tell the Router to use our enhanced history */}
    <Router history={history}>
      <Route path="/" component={home} />
    </Router>
  </Provider>,
  document.getElementById("mount")
);

store.dispatch(push("/AnimeActions"));
export default store;
