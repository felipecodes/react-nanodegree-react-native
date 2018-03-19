import React from 'react'
import { StackNavigator } from 'react-navigation'
import DeckList from '../DeckList'
import Deck from '../Deck'
import QuizHome from '../QuizHome'
import Quiz from '../Quiz'
import NewCard from '../NewCard'

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
  QuizHome: {
    screen: QuizHome,
    navigationOptions: {
      title: 'Quiz'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz'
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      title: 'Add Card'
    }
  }
})

export default DeckListNavigator
