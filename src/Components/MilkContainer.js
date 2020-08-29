import React, {useState} from 'react'
import { buyMilk } from './../redux/milk/milkActions';
import { connect } from 'react-redux';
import '../App.css'

function MilkContainer(props) {
    const [milkAmount, setMilkAmount] = useState(5)
    return (
        <div className="another-row">
            <h2>Quantity of milk in litres:  {props.milkAmount} </h2>
            <input type="text" value={milkAmount} onChange = {e => setMilkAmount(e.target.value)} />
            <button onClick = {() => props.buyMilk(milkAmount)} > Buy milk </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        milkAmount: state.milk.milkAmount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyMilk: milkAmount => dispatch(buyMilk(milkAmount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MilkContainer)
