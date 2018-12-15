import React from 'react'
import './Person.css'
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click} > I'm  {props.name} , And I Am  {props.age}  years old!</p>  
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )  
}; 


export default person;