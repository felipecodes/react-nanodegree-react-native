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
