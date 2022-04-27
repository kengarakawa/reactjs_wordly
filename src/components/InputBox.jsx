import React from "react"
import {useSelector} from  'react-redux'


const InputBox = ({keyDownHandler}) => {
    
  const game = useSelector( (state) => state.game)  
    
  /* const handleKeyDown = (e) => {
    
    if(e.key === 'Enter') {
      // console.log(e.currentTarget.value )
      
      if(e.currentTarget.value.trim().length !== 5  ) {
        dispatch({
          type: GAME_STATE_SET_ERROR , 
          payload: `Word must be 5-characters long`
        })
        return false 
      }
      
      if(!noRepeatingCharacters(e.currentTarget.value)) {
        dispatch({
          type: GAME_STATE_SET_ERROR , 
          payload: `cannot use duplicated character, ${e.currentTarget.value}`
        })
        return false 
      }
      
      
      if(!validateWord(e.currentTarget.value)) {
         dispatch({
           type: GAME_STATE_SET_ERROR , 
           payload: `${e.currentTarget.value} is an invalid word`
         })
         return false 
      }
      
      
      dispatch({      
        type: GAME_STATE_SET_GUESS,
        payload : {
          guess: e.currentTarget.value.trim() 
        }
      })
      
      
      // reset       
      textboxRef.current.value = ''
        
    }
    
    
    
    
    
  }
  */
  
  
  let guessRemaining = 6 - game.guessIndex ?? 0
  // console.log(guessRemaining)
  guessRemaining = guessRemaining === 1 ? '1 Guess remaining' : `${guessRemaining} guesses remaining`

  return (
    <div className="flexBox">
    
      <span className="label">{guessRemaining}:  </span>
      <input
        type="text"
        style={{ size: 5, fontSize: 30}}
        // _onKeyDown={handleKeyDown}
        onKeyDown={(e) => { 
          keyDownHandler(e)
          // reset
          //e.currentTarget.value = ""
        }}
        maxLength="5"
        // ref={textboxRef}
      />
      { false && game.error && <div className="error">{game.error}</div>}
    </div>
  )
}

export default InputBox
