import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchAnime} from '../actions';

import Anime from './Anime';

const AnimeManga = props => {
  useEffect(() => {
    props.fetchAnime();
  }, []);

  if (props.isFetching) {
    // usually a spinner (react-loader-spinner)
    return <h2>Loading AnimeManga ...</h2>;
  }

  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.Anime.map(fact => (
        <Anime key={Anime._id} {Manga._id} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    catFacts: state.catFacts,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchAnime }
)(AnimeManga);
