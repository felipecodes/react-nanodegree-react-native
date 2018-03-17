import { AsyncStorage } from 'react-native'

const DECKS_KEY = 'DECKS_KEY'

export const fetchDecks = () =>
  AsyncStorage.getItem(DECKS_KEY)

export const create = text => (
  AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({
    [text]: {
      title: text
    }
  }))
)