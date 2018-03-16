import * as api from '../utils/api'
import { RECEIVE_DECKS } from '../constants'

const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
})

export const fetchDecks = () => dispatch => (
  api.fetchDecks()
    .then(decks => {
      if (decks) {
        dispatch(receiveDecks(decks))
      }
    })
)