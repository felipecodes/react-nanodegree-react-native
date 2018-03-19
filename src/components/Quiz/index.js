import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Button from '../Button'

class Quiz extends Component {
  render () {
    const deck = this.props.navigation.getParam('deck')
    return (
      <View>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length} cards</Text>
        <Button onPress={() => {}}>Add Card</Button>
        <Button onPress={() => {}}>Start Quiz</Button>
      </View>
    )
  }
}

export default Quiz
