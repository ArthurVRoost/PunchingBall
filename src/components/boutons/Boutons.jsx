import './boutons.css'
import { useState } from 'react'
export default function Boutons({text, onClick, className }) {
    return(
        <>
            <button onClick={onClick} className={`button ${className}`} > {text} </button>
        </>
    )
}