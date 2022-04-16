import {
  GAME_STATE_SET_GAMEOVER_WIN,
  GAME_STATE_SET_GAMEOVER_LOSE,
  GAME_STATE_RESET,
  GAME_STATE_SET_GUESS,
} from "../constants/gameStateConstants"

export const maxGuesses = 6
export const gameStateReducer = (
  state = {
    gameIsOver: false,
    isWon: false,
    guesses: Array(maxGuesses),
  },
  action
) => {
  switch (action.type) {
    case GAME_STATE_SET_GAMEOVER_WIN:
      return { ...state, gameIsOver: true, isWon: true }
    case GAME_STATE_SET_GAMEOVER_LOSE:
      return { ...state, gameIsOver: true, isWon: false }
    case GAME_STATE_RESET:
      return {
        gameIsOver: false,
        isWon: false,
        guesses: Array(maxGuesses),
      }
    default : return state 
  }
}
