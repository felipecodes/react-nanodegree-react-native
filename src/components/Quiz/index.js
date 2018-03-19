import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Quiz extends Component {
  render () {
    const questions = this.props.navigation.getParam('questions')
    return (
      <View>
        <Text>Quiz</Text>
      </View>
    )
  }
}

export default Quiz
