import React from 'react'
import { buyButter } from './../redux/butter/butterActions';
import { connect } from 'react-redux';
import '../App.css'

function ButterContainer(props) {
    return (
        <div className="another-row">
            <h2>Number of butter: {props.numberOfButter}</h2>
            <button onClick = {props.buyButter}> Add Butter </button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        numberOfButter: state.butter.numberOfButter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyButter: () => dispatch(buyButter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ButterContainer)
