import * as api from '../utils/api'
import uuid from 'uuid/v1'
import { RECEIVE_DECKS, CREATE_DECK } from '../constants'

const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
})

const createDeck = deck => ({
  type: CREATE_DECK,
  deck
})

export const fetchDecks = () => dispatch => (
  api.fetchDecks()
    .then(decks => {
      if (decks) {
        dispatch(receiveDecks(JSON.parse(decks)))
      }
    })
)

export const createDeckAsync = text => dispatch => {
  const deck = {
    id: uuid(),
    title: text,
    questions: []
  }

  return api.create(deck)
    .then(() => dispatch(createDeck(deck)))
}