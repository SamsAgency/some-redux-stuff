import React from 'react'
import { buyCheese } from './../redux/cheese/cheeseAction';
import { connect } from 'react-redux';
import '../App.css'

function CheeseContainer(props) {
    return (
        <div className="another-row">
            <h2>Number of Cheese: {props.numberOfCheese} </h2>
            <button onClick = {props.buyCheese} >Buy Cheese</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfCheese: state.cheese.numberOfCheese
    }
} 

const mapDispatchToProps = dispatch =>{
    return{
        buyCheese: () => dispatch(buyCheese())
    }
}

export default connect( mapStateToProps ,mapDispatchToProps) (CheeseContainer)
