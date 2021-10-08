import React from 'react';
import './Preview.css';

export default function Preview(props) {

    return (<>

        

        <div className="line">
        </div>
        <div className="prev container">
            <div className="container">
                <hr/>
            <p className="mint">Estimated reading time :: {(props.text.split(" ").filter((a)=>a!=="").length / 4)} seconds</p>
            </div>
            <div className="container">
                <p className="wl"> {(props.text.split(" ").filter((a)=>a!=="")).length} words and {props.text.length} characters</p>
            </div>
            <div className="k">
                <p className="prevT">{props.text}</p>
            </div>
        </div>
        </>
    )
}
