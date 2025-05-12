// IMPORTS
import './boutons.css'
import { useState } from 'react'
// FONCTIONS
export default function Boutons({text, onClick, className }) {
    // RETURN
    return(
        <>
            {/* className en parametre pour pouvoir le style des 2 par la suite en fonction de PUNCH ou RESTART */}
            <button onClick={onClick} className={`button ${className}`} > {text} </button>
        </>
    )
}