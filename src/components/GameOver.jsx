import React from 'react'
import { GAME_STATE_RESET } from './../constants/gameStateConstants';
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';

const GameOver = () => {

  const toastGameOverId = 'toastGameOver'
  const dispatch = useDispatch()  
  const game = useSelector( state => state.game )
  
  
  const resetHandler = () => {
      dispatch({ type: GAME_STATE_RESET})
  }
  
  const winToast = () => {
    toast.success(
    (<div className="game-over">
    YOU WIN
    <button onClick={resetHandler}>Start Over</button>
    </div>
    ) , {
      position: toast.POSITION.TOP_CENTER , 
      autoClose: false,
      hideProgressBar: true,
      theme: "dark" ,
      toastId: toastGameOverId
    })
  }
  const loseToast =() => {
    toast.success(`YOU LOSE - answer ${game.subject}`, {
      position: toast.POSITION.TOP_CENTER , 
      autoClose: false,
      hideProgressBar: true,
      theme: "dark" , 
      toastId: toastGameOverId
    })
  }
    
  return (
    <>
    { game.isWon ? winToast() : loseToast()}
    </>        
  )
}

export default GameOver