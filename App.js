import React from 'react'
import { View } from 'react-native'
import DeckStatusBar from './src/DeckStatusBar';
import Tabs from './src/Tabs'

const App = () => (
  <View style={{flex: 1}}>
    <DeckStatusBar backgroundColor={'#aaa'} />
    <Tabs />
  </View>
)

export default App