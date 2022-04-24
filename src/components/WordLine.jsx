import React from 'react'
import { useSelector } from 'react-redux'

const WordLine = ({guessString}) => {
  
  const game = useSelector( state => state.game )
  const subject = game.subject 
  
  return (
    <div className="wordline-box" >
        {
          guessString.split('').map(
            (currentChar, index)  => {               
              let match = 'tile'
              if( subject[index] === currentChar) {
                match = 'tile-a'                 
              } else if( subject.indexOf( currentChar) >= 0) {
                match = 'tile-b'
              }                            
              return  ( 
            <div className={match} key={Math.random()} >{currentChar}</div>
            )
              }
          )
          
        }
    </div>
  )
}

export default WordLine