import React, { useState , useRef } from "react"
import WordLine from "./../components/WordLine"

const GamePage = () => {
  console.log('rerender')
  const maxGuesses = 6
  const wordLength = 5
  let temp = Array(maxGuesses).fill(1)
  temp = temp.map((i) => Array(wordLength).fill(null))

  const [guesses, setGuesses] = useState(temp)
  const [guess, setGuess] = useState('')
  
  const [errorMessage, setErrorMessage] = useState('')

  /*const changeGuess = (e) => {
    console.log('preventing submit?')
    e.preventDefault()  
    setGuess(e.target.value)    
  }*/
  
  const textRef = useRef()
  
  const detectSubmit = (e) => {    
    
    if (e.key === "Enter") {
      e.preventDefault()
      console.log("Enter being pressed")
      
      console.warn(textRef.current.value)
      console.warn(textRef.current.value.length)
      
      if(textRef.current.value.lenght !== 5 ) {
          setErrorMessage('Should be 5-characters word.')
      } else {
        console.error(textRef.current.value.length)
          console.log('me?')
          setErrorMessage('')
      }
      
      console.log(textRef.current.value)
      return false 
    }
  }

  // console.log(guesses.length)

  return (
    <div>
      <h1>GamePage</h1>
      
      
      <h1 style={{fontSize:30 , color:'red'}} >{errorMessage}</h1>

      <input ref={textRef} type="text" onKeyDown={detectSubmit}  maxLength="5" autoFocus />
      {guess}
      <hr />
      {guesses.length}
      {guesses.map((guess, k) => (
        <WordLine guessString={"guess"} key={k} />
      ))}
    </div>
  )
}

export default GamePage
