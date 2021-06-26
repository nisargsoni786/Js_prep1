import React from 'react'
import './backdrop.css'


function Backdrop({click,show}) {
    return show && (
        <div className="backdrop" onClick={click}>

        </div>
    )
}

export default Backdrop
