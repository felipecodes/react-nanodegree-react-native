import { combineReducers } from 'redux'
import {
  RECEIVE_DECKS,
  CREATE_DECK,
  ADD_CARD,
  ADD_ERROR_MESSAGE
} from '../constants'

const deckReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks

    case CREATE_DECK:
      return {
        ...state,
        [action.deck.id]: action.deck
      }
    
    case ADD_CARD:
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          questions: [
            action.card,
            ...state[action.deckId].questions
          ]
        }
      }

    default:
      return state
  }
}

const globalReducer = (state = { errorMessage: '' }, action) => {
  switch (action.type) {
    case ADD_ERROR_MESSAGE:
      return {
        errorMessage: action.message
      }
    default:
      return state
  }
}

export default combineReducers({
  global: globalReducer,
  decks: deckReducer
})