import React from "react";
import { connect } from "react-redux";


const Anime = () => {
  return <h2>Welcome to My Anime Page</h2>;
};

const mapStateToProps = state => {
  return {
    anime: state.anime,
    isFetching: state.isFetching,
    error: state.erroe
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
