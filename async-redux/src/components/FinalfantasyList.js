import React, { useState, useEffect } from "react";

import fetchFinalfantasy from "../actions/index.js";
import { connect } from "react-redux";
import FinalFantasy from "./FinalFantasy.js";

const FinalfantasyList = props => {
  useEffect(() => {
    props.fetchFinalfantasy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(props.finalfantasy);
  {
    props.finalfantasy.map(finalfantasy => {
      return (
        <FinalFantasy finalfantasy={finalfantasy} url={finalfantasy.url} />
      );
    });
  }
  const mapDispatchToProps = {
    fetchFinalfantasy
  };
};
export default connect(state => {
  console.log("mapStateToProps.STATE", state);
  return state;
})(FinalfantasyList);
