import React, {  useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { GAME_STATE_RESET } from "./../constants/gameStateConstants"

import WordLine from "./../components/WordLine"
import InputBox from "./../components/InputBox"
import GameOver from './../components/GameOver';

const GamePage = () => {
  const dispatch = useDispatch()
  const game = useSelector((state) => state.game)
  const subject = game.subject
  
  // console.log('Pre- useEffect')

  useEffect(() => {    
    if (game.subject === undefined || game.subject === null) {
      
      // console.log('dispatch, randomWord')
      dispatch({
        type: GAME_STATE_RESET,        
      })
    }
  })

  // const maxGuesses = 6
  // const wordLength = 5
  // let temp = Array(maxGuesses).fill(1)
  // temp = temp.map((i) => Array(wordLength).fill(null))

  

  const resetHandler = (dispatch) => {
    // console.log("RESETING!") 
    if(window.confirm('Starting over?'))    {
      dispatch({
        type: GAME_STATE_RESET,      
      })  
    }
    
  }

  return (
    <div>
      <div className="game-header" >
        <h1>Wordly</h1>
        <button style={{ color: "red" , fontWeight:'bold' }} onClick={() => resetHandler(dispatch)}>
          Reset
        </button>
      </div>

      <div style={{ backgroundColor: "black" }}>{subject}</div>
      <br />

          
      {game.guesses.map((guess, k) =>
        guess instanceof Array ? (
          <span key={k}></span>
        ) : (
          <WordLine guessString={guess} key={k} />
        )
      )}
            
      { game.guessIndex < game.maxGuesses && !game.gameIsOver && <InputBox />}
      
      { game.gameIsOver && <GameOver />}
      
      
    </div>
  )
}

export default GamePage
