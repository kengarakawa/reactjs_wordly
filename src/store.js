import { createStore , combineReducers , applyMiddleware} from 'redux'
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
        guesses : Array(maxGuess)        
    }    
}
const middleware = [thunk] 

const store = createStore(
    reducer , 
    initialStates , 
    applyMiddleware(...middleware)        
)

export default store