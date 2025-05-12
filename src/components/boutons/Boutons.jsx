import './boutons.css'
import { useState } from 'react'
export default function Boutons({text, onClick, className, disabled }) {
    return(
        <>
            <button onClick={onClick} disable={disabled} className={`button ${className}`} > {text} </button>
        </>
    )
}