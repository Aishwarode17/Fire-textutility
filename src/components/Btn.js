import React from 'react'
import './Btn.css'

export default function Btn({upper,lower,rmspace,clear,copy, paste}) {
    
    return (

        <div className=" btngr">
        
        <button type="button" className="bn" onClick={lower} >lowercase</button>
        <button type="button" className="bn" onClick={upper} >uppercase</button>
        <button type="button" className="bn" onClick={rmspace}>remove_extra_spaces</button>
        <button type="button" className="bn" onClick={clear}>clear</button>
        <button type="button" className="bn" onClick={copy} >copy</button>
        <button type="button" className="bn" onClick={paste} >paste</button>


        </div>
    )
}
