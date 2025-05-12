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
  const isGameOver = vie <= 0
  const [isPunching, setIsPunching] = useState(false)
  // FONCTIONS
  const handlePunch = () => {
    if (isGameOver) return;

    setIsPunching(true);
    setTimeout(() => setIsPunching(false), 400); 

    const newVie = Math.max(vie - 10, 0);
    setVie(newVie);
  };

  const handleRestart = () => {
    setVie(100);
    setIsPunching(false);
  };

  return (
    <>
     <div className='app-container'>
        <Images isUsed={isGameOver} isPunching={isPunching}/>
        <Progress vie={vie}/>
        <div className='button-container'>
            {!isGameOver && (
              <Boutons text="PUNCH" onClick={handlePunch} className='button-punch'/>
            )}
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
