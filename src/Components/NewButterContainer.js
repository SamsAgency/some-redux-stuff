import React, {useState} from 'react'
import { buyButter } from './../redux/butter/butterActions';
import { connect } from 'react-redux';
import '../App.css'

function NewButterContainer(props) {
    const [butterNumber, setButterNumber] = useState(5)
    return (
        <div className="another-row">
            <h2>Number of butter: {props.numberOfButter}</h2>
            <input type="text" value={butterNumber} onChange={e => setButterNumber(e.target.value)} />
            <button onClick = {() => props.buyButter(butterNumber)}> Add Butter </button>
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
        buyButter: butterNumber => dispatch(buyButter(butterNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewButterContainer)
