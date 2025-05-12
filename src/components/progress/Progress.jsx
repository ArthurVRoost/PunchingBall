// IMPORTS
import './progress.css'
export default function Progress({vie}) {
    return(
        <>
        <div className='progress-bar-container'>
            <div className='progress-bar-fill' style={{width: `${vie}%`}}>
                <span className='progress-bar-text'>{vie}/100 PV</span>
            </div>
        </div>
        </>
    )
}