import { combineReducers } from 'redux'
import { RECEIVE_DECKS } from '../constants'

const deckReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks
    default:
      return state
  }
}

export default combineReducers({ decks: deckReducer })