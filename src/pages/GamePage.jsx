import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  GAME_STATE_RESET,
  GAME_STATE_SET_GUESS,
  
} from "./../constants/gameStateConstants"

import { validateWord, noRepeatingCharacters } from "./../services/validateWord"

import { ToastContainer , toast } from "react-toastify"

import WordLine from "./../components/WordLine"
import InputBox from "./../components/InputBox"
import GameOver from "./../components/GameOver"




const GamePage = () => {
    
  
  const dispatch = useDispatch()
  const game = useSelector((state) => state.game)
  const subject = game.subject

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
    if (window.confirm("Starting over?")) {
      dispatch({
        type: GAME_STATE_RESET,
      })
    }
  }

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      // console.log(e.currentTarget.value )

      if (e.currentTarget.value.trim().length !== 5) {
        toast.warn("Word must be 5-characters long", {
          position: toast.POSITION.TOP_CENTER , 
          autoClose: 3000,
          hideProgressBar: true,
          theme: "dark"
        })

        // dispatch({
        //   type: GAME_STATE_SET_ERROR,
        //   payload: `Word must be 5-characters long`,
        // })

        return false
      }

      if (!noRepeatingCharacters(e.currentTarget.value)) {
        toast.warn(`Cannot use duplicated character, ${e.currentTarget.value}`, {
          position: toast.POSITION.TOP_CENTER , 
          autoClose: 3000,
          hideProgressBar: true,
          theme: "dark"
        })
        
        // dispatch({
        //   type: GAME_STATE_SET_ERROR,
        //   payload: `cannot use duplicated character, ${e.currentTarget.value}`,
        // })
        return false
      }

      if (!validateWord(e.currentTarget.value)) {
        toast.warn(
          (
            <>
            <span className="strong">{e.currentTarget.value}</span> is an invalid word
            </>
          )
        , {
          position: toast.POSITION.TOP_CENTER , 
          autoClose: 3000,
          hideProgressBar: true,
          theme: "dark"
        })
        // dispatch({
        //   type: GAME_STATE_SET_ERROR,
        //   payload: `${e.currentTarget.value} is an invalid word`,
        // })
        return false
      }

      dispatch({
        type: GAME_STATE_SET_GUESS,
        payload: {
          guess: e.currentTarget.value.trim(),
        },
      })

      // reset
      // textboxRef.current.value = ""
      e.currentTarget.value = ""
    }
  }


  return (
    <div>
      <div className="game-header">
        <h1>Wordly</h1>
        <button
          style={{ color: "red", fontWeight: "bold" }}
          onClick={() => resetHandler(dispatch)}
        >
          Reset
        </button>
      </div>

      <div className="copyright" >
        <div className="inline">Copyright 2022 @keng_arakawa</div>
        <div className="inline" style={{color:'#222222', paddingRight:15}}>{subject}</div>
        </div>
      <br />

      {game.guesses.map((guess, k) =>
        guess instanceof Array ? (
          <span key={k}></span>
        ) : (
          <WordLine guessString={guess} key={k} />
        )
      )}

      {game.guessIndex < game.maxGuesses && !game.gameIsOver && (
        <InputBox keyDownHandler={keyDownHandler} />
      )}

      {game.gameIsOver && <GameOver />}

      <ToastContainer />
    </div>
  )
}

export default GamePage
