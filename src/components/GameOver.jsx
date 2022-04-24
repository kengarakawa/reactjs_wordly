import React from 'react'
import { GAME_STATE_RESET } from './../constants/gameStateConstants';

import { useDispatch, useSelector } from 'react-redux';

const GameOver = () => {
    
  const dispatch = useDispatch()  
  const game = useSelector( state => state.game )
  
  
  const resetHandler = () => {
      dispatch({ type: GAME_STATE_RESET})
  }
    
  return (
    <div className="gameover-modal">
        
        <div className="gameover-content">
            <div><b>GameOver : { game.isWon ? 'You won' : 'You lose'}</b>    </div>
            
            
            <div><button onClick={resetHandler}>Start Over</button></div>
        </div>
        
    </div>
  )
}

export default GameOver