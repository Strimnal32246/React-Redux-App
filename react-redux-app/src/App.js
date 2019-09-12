import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/home.js";
import { connect } from "react-redux";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Anime Page</h1>
        <Link to="/">Home</Link>
      </header>

      <main>
        <Route exact path="/" component={Home} />
      </main>
    </div>
  );
}
const mapstateToProps = state => {
  return {
    anime: state.anime,
    isFetching: state.isFecthing,
    error: state.error
  };
};
export default connect(
  mapstateToProps,
  {}
)(App);
