import { createStore , combineReducers , applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'

import { gameStateReducer } from './reducers/GameStateReducer';


export const maxGuess = 6
const reducer = combineReducers({
    game: gameStateReducer    
})

const initialStates = {
    game: {
        gameIsOver : false ,
        isWon : false ,
        // guesses : Array(maxGuess)        
        guesses :  [ [] , [] , [] , [] , [] ] ,
        guessIndex : 0 ,
        subject : null ,
        maxGuesses : 6 
        
    }    
}

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsDenylist, actionsCreators and other options if needed
    trace: true, traceLimit: 25
  });
  
  
const middleware = [thunk] 

const store = createStore(
    reducer , 
    initialStates , 
    composeEnhancers( applyMiddleware(...middleware))
)

export default store