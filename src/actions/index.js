import * as api from '../utils/api'
import { RECEIVE_DECKS, CREATE_DECK } from '../constants'

const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
})

const createDeck = text => ({
  type: CREATE_DECK,
  deck: text
})

export const fetchDecks = () => dispatch => (
  api.fetchDecks()
    .then(decks => {
      if (decks) {
        dispatch(receiveDecks(decks))
      }
    })
)

export const createDeckAsync = text => dispatch => (
  api.create(text)
    .then(() => dispatch(createDeck(text)))
)