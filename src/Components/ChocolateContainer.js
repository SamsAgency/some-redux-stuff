import React, {useState} from 'react'
import { buyChocolate } from './../redux/chocolate/chocolateAction';
import { connect } from 'react-redux';

function ChocolateContainer(props) {
    const [numberOfChocolate, setNumberOfChocolate] = useState(10)
    return (
        <div className="another-row">
            <h2> Number of Chocolate: {props.numberOfChocolate} </h2>
            <input type="text" value={numberOfChocolate} onChange={ e => setNumberOfChocolate(e.target.value)} />
            <button onClick={() => props.buyChocolate(numberOfChocolate)} > Buy Chocolate </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfChocolate: state.chocolate.numberOfChocolate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyChocolate: numberOfChocolate => dispatch(buyChocolate(numberOfChocolate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ChocolateContainer)