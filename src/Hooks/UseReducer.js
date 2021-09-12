import React , {useState , useReducer} from 'react'
import "./style.css";


const UseReducer = () => {

    const reducer = (state, action) =>
    {
        if(action.type === "Increment")
        {
            state = state +1;
        }

        if(state >0 && action.type === "Decrement")
        {
            state = state -1;
        }
        return state;
    }

    const [state, dispatch] = useReducer(reducer, 10);

    return (
        <div>
            <div className="center_div">
                <p>{state}</p>
                <div className="button2" onClick = {() => dispatch({type:"Increment"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Increment
                </div>

                <div className="button2" onClick = {() => dispatch({type:"Decrement"})}> 
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Decrement
                </div>
            </div>
        </div>
    )
}

export default UseReducer;
