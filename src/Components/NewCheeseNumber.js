import React, {useState} from 'react'
import { buyCheese } from './../redux/cheese/cheeseAction';
import { connect } from 'react-redux';
import '../App.css'

function NewCheeseContainer(props) {
    const [cheeseNumber, setCheeseNumber] = useState(3)
    return (
        <div className="another-row">
            <h2>Number of Cheese Currently: {props.numberOfCheese} </h2>
            <input type="text" value={cheeseNumber} onChange={e => setCheeseNumber(e.target.value)} />
            <button onClick = {() => props.buyCheese(cheeseNumber)} >Buy {cheeseNumber} Cheese</button>
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
        buyCheese: cheeseNumber => dispatch(buyCheese(cheeseNumber))
    }
}

export default connect(mapStateToProps ,mapDispatchToProps) (NewCheeseContainer)
