import React from "react";
import { buySweet } from "./../redux/sweet/sweetAction";
import { connect } from "react-redux";
import '../App.css'

function SweetContainer(props) {
  return (
    <div className="another-row">
      <h2>Number of Sweets: {props.numberOfSweet} </h2>
      <button onClick={props.buySweet}>Buy Sweet</button>
    </div>
  );
  }

  const mapStateToProps = (state) => {
    return {
      numberOfSweet: state.sweet.numberOfSweet,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      buySweet: () => dispatch(buySweet()),
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(SweetContainer);
