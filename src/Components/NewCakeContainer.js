import React, {useState} from 'react'
import { connect } from 'react-redux';
import { buyCake } from './../redux/cakes/cakeActions';
import '../App.css'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div className="another-row">
            <h2>Number of Cakes currently: {props.numberOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick = {() =>props.buyCake(number)}> Buy {number} Cakes </button>
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
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewCakeContainer)
 