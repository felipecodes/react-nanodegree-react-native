import { AsyncStorage } from 'react-native'

const DECKS_KEY = 'DECKS_KEY'

// export const fetchDecks = () =>
//   AsyncStorage.clear()
//     .then(() => AsyncStorage.getItem(DECKS_KEY))

export const fetchDecks = () =>
  AsyncStorage.getItem(DECKS_KEY)

export const create = deck => (
  AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({
    [deck.id]: deck
  }))
)

export const addCard = (deckId, card) => {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(JSON.parse)
    .then(decks => {
      decks[deckId].questions = [
        card,
        ...decks[deckId].questions
      ]

      return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
    })
}