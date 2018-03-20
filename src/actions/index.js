import * as api from '../utils/api'
import uuid from 'uuid/v1'
import {
  ADD_ERROR_MESSAGE,
  RECEIVE_DECKS,
  CREATE_DECK,
  ADD_CARD
} from '../constants'

const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
})

const addCard = (deckId, card) => ({
  type: ADD_CARD,
  deckId,
  card,
})

const AddErrorMessage = message => ({
  type: ADD_ERROR_MESSAGE,
  message
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

export const addCardAsync = (deckId, card) => (dispatch, getState) => {
  const { decks } = getState()
  const { questions } = decks[deckId]
  const cardAlreadyExists = (questions.filter(_ => (
    _.question === card.question
  )).length > 0)

  if (cardAlreadyExists) {
    return dispatch(AddErrorMessage('This question already exists'))
  }

  return api.addCard(deckId, card)
    .then(() => dispatch(addCard(deckId, card)))
}