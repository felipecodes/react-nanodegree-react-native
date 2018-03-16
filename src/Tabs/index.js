import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import DeckListNavigator from '../DeckListNavigator'
import NewDeck from '../NewDeck'

const Tabs = TabNavigator(
  {
    Decks: {
      screen: DeckListNavigator,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
        )
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#333' : '#fff',
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? '#fff' : '#333',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

export default Tabs