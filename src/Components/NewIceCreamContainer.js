import React, { useState } from "react";
import { connect } from "react-redux";
import { buyIceCream } from "./../redux/iceCream/iceCreamAction";
import '../App.css'

function NewIceCreamContainer(props) {
  const [iceCreamNumber, setIceCreamNumber] = useState(1);
  return (
    <div className="another-row">
      <h2>Number of IceCream Currently: {props.numberOfIceCream}</h2>
      <input
        type="text"
        value={iceCreamNumber}
        onChange={(e) => setIceCreamNumber(e.target.value)}
      />
      <button onClick={() => props.buyIceCream(iceCreamNumber)}>
        Buy {iceCreamNumber} IceCream
      </button>
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
    buyIceCream: (iceCreamNumber) => dispatch(buyIceCream(iceCreamNumber)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewIceCreamContainer);
