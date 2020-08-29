import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
import '../App.css'

function CakeContainer(props) {
  return (
    <div className="another-row">
      <h2>Number of cakes : {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buycakes</button>
    </div>
  );
}

// map state to props
const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cakes.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
