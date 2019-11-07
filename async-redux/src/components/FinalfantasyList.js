import React from "react";
import { connect } from "react-redux";
import { fetchFinalfantasy } from "../actions/index.js";

function FinalfantasyList(props) {
  console.log("FinalfantasyList", props);
  return (
    <>
      <button onClick={() => props.dispatch(fetchFinalfantasy())}>
        Get Data
      </button>
      {props.isFetching && <span>⏰</span>}
      {props.error && <div>{props.error.message}</div>}
      <ul>
        {props.finalfantasy.map(f => (
          <li className="finalfantasy" key={f.name}>
            {f.name}
          </li>
        ))}
      </ul>
    </>
  );
}

const mapDispatchToProps = {
  fetchFinalfantasy
};

export default connect(state => {
  console.log("mapStateToProps.STATE", state);
  return state;
})(FinalfantasyList);
