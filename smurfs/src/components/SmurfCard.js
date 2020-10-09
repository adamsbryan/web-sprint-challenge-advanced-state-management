import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { fetchSmurfs } from "../store/actions/index";

const Card = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div>
      <h2>Smurf List:</h2>
      {props.smurfs.map((smurf) => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, {fetchSmurfs})(Card);