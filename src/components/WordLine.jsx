import React from 'react'

const WordLine = ({guessString}) => {
  return (
    <div style={{border:'solid 1px red', padding: 20  , margin: 10}}>              
        {guessString}
    </div>
  )
}

export default WordLine