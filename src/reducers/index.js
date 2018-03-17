import { combineReducers } from 'redux'
import { RECEIVE_DECKS, CREATE_DECK } from '../constants'

const deckReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks

    case CREATE_DECK:
      return {
        ...state,
        [action.deck.id]: action.deck
      }

    default:
      return state
  }
}

export default combineReducers({ decks: deckReducer })