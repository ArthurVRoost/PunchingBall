// IMPORTS
import { useState } from 'react'
import './App.css'
import Boutons from './components/boutons/Boutons'
import Progress from './components/progress/Progress'
import Images from './components/images/Images'
// FONCTIONS
function App() {
  // DECLA VARIABLES
  const [vie, setVie] = useState(100)
  const isFF = vie <= 0
  const [isPunching, setIsPunching] = useState(false)
  // FONCTIONS
  // SI FF IL SE PASSE RIEN, LANCE L'ANIMATION, CHANGE LA VIE EN NOUVELLE VIE 
  const handlePunch = () => {
    if (isFF) return
    setIsPunching(true);
    setTimeout(() => setIsPunching(false), 400)
    const nouvelleVie = Math.max(vie - 10, 0)
    setVie(nouvelleVie)
  };
  const handleRestart = () => {
    setVie(100);
    setIsPunching(false)
  };
  // RETURN
  return (
    <>
     <div className='app-container'>
      {/* VERIFIE QUELLE IMAGE PRENDRE, SI VIE<0 => ISFF TRUE DONC ISUSED TRUE DONC SACKC */}
        <Images isUsed={isFF} isPunching={isPunching}/>
        <Progress vie={vie}/>
        <div className='button-container'>
          {/* CONDITIONS EVALUATION */}
          {/* !FF === TRUE, SI LE JEU EST EN COURS => AFFICHE LE BOUTON PUNCH */}
            {!isFF && (
              <Boutons text="PUNCH" onClick={handlePunch} className='button-punch'/>
            )}
            {isFF && (
            <Boutons text="RESTART" onClick={handleRestart} className='button-restart'/>
            )}

        </div>
        {isFF && (
          <p className='game-over-title'>K.O.</p>
        )}
     </div>
    </>
  )
}

export default App
