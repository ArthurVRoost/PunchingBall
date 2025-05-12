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
  // GAME OVER QUAND VIE EST PLUS PETIT OU EGALE A 0
  const isGameOver = vie <= 0
  // AJOUT POUR L'ANIMATION, DE BASE EN FALSE DONC PAS D'ANIMATION, SE DECLENCHE QUE VIA UN PUNCH
  const [isPunching, setIsPunching] = useState(false)
  // FONCTIONS
  // SI GAMEOVER IL SE PASSE RIEN, LANCE L'ANIMATION, CHANGE LA VIE EN NOUVELLE VIE 
  const handlePunch = () => {
    if (isGameOver) return
    setIsPunching(true);
    setTimeout(() => setIsPunching(false), 400)
    // .MAX POUR QUE LA VIE NE DESCENDENT PAS EN DESSOUS DE 0
    const nouvelleVie = Math.max(vie - 10, 0)
    setVie(nouvelleVie)
  };
  // RESET LA VIE ET L'ANIMATION
  const handleRestart = () => {
    setVie(100);
    setIsPunching(false)
  };
  // RETURN
  return (
    <>
     <div className='app-container'>
      {/* VERIFIE QUELLE IMAGE PRENDRE, SI VIE<0 => ISGAMEOVER TRUE DONC ISUSED TRUE DONC SACKC */}
        <Images isUsed={isGameOver} isPunching={isPunching}/>
        <Progress vie={vie}/>
        <div className='button-container'>
          {/* CONDITIONS EVALUATION */}
          {/* !GAMEOVER === TRUE, SI LE JEU EST EN COURS => AFFICHE LE BOUTON PUNCH */}
            {!isGameOver && (
              <Boutons text="PUNCH" onClick={handlePunch} className='button-punch'/>
            )}
            {/* GAMEOVER === TRUE, SI LE JEU EST TERMINE => AFFICHE LE BOUTON RESTART */}
            {isGameOver && (
            <Boutons text="RESTART" onClick={handleRestart} className='button-restart'/>
            )}

        </div>
        {isGameOver && (
          <p className='game-over-title'>K.O.</p>
        )}
     </div>
    </>
  )
}

export default App
