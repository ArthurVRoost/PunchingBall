// IMPORTS
import './progress.css'
// FONCTIONS
export default function Progress({vie}) {
    // RETURN
    return(
        <>
        <div className='progress-bar-container'>
            {/* PERMET DE FAIRE DIMINUER LA BARRE DE PROGRESSION */}
            <div className='progress-bar-fill' style={{width: `${vie}%`}}>
                {/* <span className='progress-bar-text'>{vie}/100 PV</span> */}
            </div>
        </div>
        </>
    )
}