import React, { Component } from 'react'
import { View } from 'react-native'
import DeckStatusBar from './src/components/DeckStatusBar'
import Tabs from './src/components/Tabs'
// import { fetchDecks } from './utils/api'

class App extends Component {
  // componentDidMount() {
  //   fetchDecks()
  //     .then(decks => this.props.dispatch(receiveDecks(decks)))
  // }

  render() {
    return (
      <View style={{flex: 1}}>
        <DeckStatusBar backgroundColor={'#aaa'} />
        <Tabs />
      </View>
    )
  }
}

export default App
