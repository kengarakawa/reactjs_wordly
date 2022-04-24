import {
  GAME_STATE_RESET,
  GAME_STATE_SET_GUESS,
  GAME_STATE_SET_SUBJECT,
  GAME_STATE_SET_ERROR,
} from "../constants/gameStateConstants"

import { randomWord } from "../services/validateWord"
export const gameStateReducer = (
  state = {
    gameIsOver: false,
    isWon: false,
    guesses: [[], [], [], [], []],
    guessIndex: 0,
    error: null,
    maxGuesses: 6,
  },
  action
) => {
  switch (action.type) {
    /*case GAME_STATE_SET_GAMEOVER_WIN:
      return { ...state, gameIsOver: true, isWon: true }
    case GAME_STATE_SET_GAMEOVER_LOSE:      
      return { ...state, gameIsOver: true, isWon: false }
    */      
    case GAME_STATE_RESET:
      return {
        ...state,
        gameIsOver: false,
        isWon: false,
        guesses: [[], [], [], [], []],
        subject: randomWord(),
        guessIndex: 0,
      }

    case GAME_STATE_SET_SUBJECT:
      return {
        ...state,
        subject: action.payload,
        gameIsOver: false,
        isWon: false,
        guesses: [[], [], [], [], []],
      }
    case GAME_STATE_SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }

    case GAME_STATE_SET_GUESS:
      let temp = state.guesses
      let theGuess
      temp[state.guessIndex] = theGuess = action.payload.guess

      let gameIsOver = state.gameIsOver
      let isWon = state.isWon

      if (theGuess === state.subject) {
        gameIsOver = true
        isWon = true
      } else {
        
        if (state.guessIndex +1  === state.maxGuesses) {
          gameIsOver = true
          if (theGuess !== state.subject) {
            isWon = false
          }
        }
      }

      return {
        ...state,
        gameIsOver: gameIsOver,
        isWon: isWon,
        error: null,
        guesses: temp,
        guessIndex: state.guessIndex + 1,
      }
    default:
      return state
  }
}
