import React from 'react'
import './TextField.css';

export default function TextField(props) {
    
 

    return (

        <div className="container vht">
            <h3 className="heading">{props.heading}</h3>
            <textarea id = "box" onChange={props.change} value={props.text} cols="30" rows="10" className="area" placeholder="enter text here">
                
            </textarea>
         
        </div>
    )
}
