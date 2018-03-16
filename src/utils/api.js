import { AsyncStorage } from 'react-native'

const DECKS_KEY = 'DECKS_KEY'

export const fetchDecks = () =>
  AsyncStorage.getItem(DECKS_KEY)
