import React from 'react'
import { StackNavigator } from 'react-navigation'
import DeckList from '../DeckList'
import Deck from '../Deck'
import Quiz from '../Quiz'

const DeckListNavigator = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: 'Decks'
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz'
    }
  }
})

export default DeckListNavigator
