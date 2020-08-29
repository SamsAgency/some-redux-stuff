import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "./../redux/iceCream/iceCreamAction";
import '../App.css'

function IceCreamContainer(props) {
  return (
    <div className="another-row">
      <h2>Number of IceCream : {props.numberOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}

// map state to props
const mapStateToProps = (state) => {
  return {
    numberOfIceCream: state.iceCream.numberOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
